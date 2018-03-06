/* eslint-disable no-console */

const fs = require('fs')
const slug = require('slug')

module.exports.removeDuplicatesBy = (key, filepath) => {
    const rawData = JSON.parse(fs.readFileSync(filepath))

    const mapByKey = rawData.reduce((map, page) => {
        const courseSlug = slug(page['COURSE'])

        if (!map[page[key]]) {
            map[page[key]] = {
                slug: courseSlug,
                ...page,
            }
        } else {
            map[page[key]] = {
                ...map[page[key]],
                ...page,
            }
        }

        return map
    }, {})

    console.log(`Duplcates removed by ${key}: ${rawData.length - Object.keys(mapByKey).length}`);

    return Object.keys(mapByKey)
        .map(course => {
            return { ...mapByKey[course] }
        })
        .sort((a, b) => a.COURSE.localeCompare(b.COURSE))
}

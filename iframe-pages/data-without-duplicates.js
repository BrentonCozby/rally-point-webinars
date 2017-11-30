/* eslint-disable no-console */

const fs = require('fs')
const { resolve } = require('path')
const slug = require('slug')

const rawData = JSON.parse(fs.readFileSync(resolve(__dirname, 'raw-data.json')))

function removeDuplicatesBy(key) {
    const mapByKey = rawData.reduce((map, page) => {
        const courseSlug = slug(page['COURSE'])

        if (!map[page[key]]) {
            map[page[key]] = {
                ...page,
                count: 1,
                slug: courseSlug
            }
        }

        map[page[key]].count += 1

        return map
    }, {})

    console.log(`Duplcates removed by ${key}: ${rawData.length - Object.keys(mapByKey).length}`);

    return Object.keys(mapByKey)
        .map(course => {
            return { ...mapByKey[course] }
        })
        .sort((a, b) => a.COURSE.localeCompare(b.COURSE))
}

module.exports.pageDataWithoutDuplicateTitles = removeDuplicatesBy('COURSE')
module.exports.pageDataWithoutDuplicateIds = removeDuplicatesBy('ID')

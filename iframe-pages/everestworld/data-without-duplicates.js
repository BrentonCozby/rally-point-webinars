/* eslint-disable no-console */

const fs = require('fs')

module.exports.removeDuplicates = (filepath) => {
    const rawData = JSON.parse(fs.readFileSync(filepath))

    const mapByKey = rawData.reduce((map, page) => {
        const id = page.OLD.split('?id=')[1]

        if (!map[id]) {
            map[id] = {
                id,
                ...page,
            }
        } else {
            map[id] = {
                ...map[id],
                ...page,
            }
        }

        return map
    }, {})

    console.log(`Duplcates removed by id: ${rawData.length - Object.keys(mapByKey).length}`);

    return Object.keys(mapByKey)
        .map(course => {
            return { ...mapByKey[course] }
        })
}

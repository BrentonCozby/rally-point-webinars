/* eslint-disable no-console */

const fs = require('fs')
const { resolve } = require('path')
const slug = require('slug')

const rawData = JSON.parse(fs.readFileSync(resolve(__dirname, 'raw-data.json')))

const courseMapTitles = rawData.reduce((map, page) => {
    const courseSlug = slug(page['COURSE'])

    if (!map[courseSlug]) {
        map[courseSlug] = {
            ...page,
            count: 1,
            slug: courseSlug
        }
    }

    map[courseSlug].count += 1

    return map
}, {})

console.log(`Duplcates removed by title: ${rawData.length - Object.keys(courseMapTitles).length}`);

module.exports.pageDataWithoutDuplicateTitles = Object.keys(courseMapTitles)
    .map(course => {
        return { ...courseMapTitles[course] }
    })
    .sort((a, b) => a.COURSE.localeCompare(b.COURSE))





const courseMapIds = rawData.reduce((map, page) => {
    if (!map[page['ID']]) {
        map[page['ID']] = {
            ...page,
            count: 1,
            slug: page['ID']
        }
    }

    map[page['ID']].count += 1

    return map
}, {})

console.log(`Duplcates removed by id: ${rawData.length - Object.keys(courseMapIds).length}`);

module.exports.pageDataWithoutDuplicateIds = Object.keys(courseMapIds)
    .map(course => {
        return { ...courseMapIds[course] }
    })
    .sort((a, b) => a.COURSE.localeCompare(b.COURSE))

/* eslint-disable no-console */

const { resolve } = require('path')
const fs = require('fs')
const ejs = require('ejs') // eslint-disable-line import/no-extraneous-dependencies
const { pageDataWithoutDuplicateTitles } = require('./remove-duplicates.js')

// pageDataWithoutDuplicateTitles.forEach(page => {
//     const ejsTemplate = fs.readFileSync(resolve(__dirname, 'iframe-template.ejs'), 'utf-8')

//     const TITLE = page['COURSE']
//     const DESCRIPTION = page['COURSE']
//     const SLUG = slug(TITLE)
//     const IMAGE_FILENAME = ''
//     const DOMAIN = page['URL']
//     const IFRAME_URL = page['REDIRECT URL'] + page['Extension'].slice(1) + page['ID']

//     const html = ejs.render(ejsTemplate, {
//         TITLE,
//         DESCRIPTION,
//         SLUG,
//         IMAGE_FILENAME,
//         DOMAIN,
//         IFRAME_URL
//     })

//     const newFilePath = resolve(__dirname, '..', 'dist', `${SLUG}.html`)

//     fs.writeFile(newFilePath, html, (writeFileError) => {
//         if (writeFileError) {
//             throw Error(writeFileError)
//         }
//     })
// })

function foo() {
    const page = pageDataWithoutDuplicateTitles[0]
    const ejsTemplate = fs.readFileSync(resolve(__dirname, 'iframe-template.ejs'), 'utf-8')

    const TITLE = page['COURSE']
    const DESCRIPTION = page['COURSE']
    const SLUG = page.slug
    const IMAGE_FILENAME = ''
    const DOMAIN = page['URL']
    const IFRAME_URL = page['REDIRECT URL'] + page['Extension'].slice(1) + page['ID']

    const html = ejs.render(ejsTemplate, {
        TITLE,
        DESCRIPTION,
        SLUG,
        IMAGE_FILENAME,
        DOMAIN,
        IFRAME_URL
    })

    const newFilePath = resolve(__dirname, '..', 'dist', `${SLUG}.html`)

    fs.writeFile(newFilePath, html, (writeFileError) => {
        if (writeFileError) {
            throw Error(writeFileError)
        }
    })
}

foo()

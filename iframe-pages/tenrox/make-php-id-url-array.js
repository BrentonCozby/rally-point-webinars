/* eslint-disable no-console */

const { resolve } = require('path')
const fs = require('fs')
const { removeDuplicates } = require('./data-without-duplicates.js')

let phpArrayString = '<?php $courseMap = array('

phpArrayString += removeDuplicates(resolve(__dirname, 'raw-data.json')).map(page => {
    return `"${page.id}" => "${page.NEW}"`
}).join(', ')

phpArrayString += '); ?>'

fs.writeFile(resolve(__dirname, 'php-id-url-array.php'), phpArrayString, (writeFileError) => {
    if (writeFileError) {
        throw Error(writeFileError)
    }
})

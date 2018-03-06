/* eslint-disable no-console */

const { resolve } = require('path')
const fs = require('fs')
const { removeDuplicatesBy } = require('./data-without-duplicates.js')

let phpArrayString = '<?php $courseMap = array('

phpArrayString += removeDuplicatesBy('ID', resolve(__dirname, 'raw-data.json')).map(page => {
    return `"${page['ID']}" => "${page['ADOBE URL OR RECORDING LINK']}"`
}).join(', ')

phpArrayString += '); ?>'

fs.writeFile(resolve(__dirname, 'php-id-url-array.php'), phpArrayString, (writeFileError) => {
    if (writeFileError) {
        throw Error(writeFileError)
    }
})

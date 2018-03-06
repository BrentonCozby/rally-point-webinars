/* eslint-disable no-console */

const { resolve } = require('path')
const fs = require('fs')

let phpArrayString = '<?php $courseMap = array('

phpArrayString += JSON.parse(fs.readFileSync(resolve(__dirname, 'raw-data.json'))).map(page => {
    const id = page['Registration Page'].split('id=')[1]

    return `"${id}" => "${page['Redirect Slug']}"`
}).join(', ')

phpArrayString += '); ?>'

fs.writeFile(resolve(__dirname, 'php-id-url-array.php'), phpArrayString, (writeFileError) => {
    if (writeFileError) {
        throw Error(writeFileError)
    }
})

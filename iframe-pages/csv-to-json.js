const fs = require('fs')
const { resolve } = require('path')
const csv = require('csvtojson')

/** USAGE
 * command-line: node csv-to-json.js root-domain/raw-data
 */

const rawData = []

csv()
    .fromFile(resolve(__dirname, `${process.argv[2]}.csv`))
    .on('json', jsonRow => {
        rawData.push(jsonRow)
    })
    .on('done', csvParsingError => {
        if (csvParsingError) {
            console.error(Error(csvParsingError))
        }

        console.log(rawData);
        fs.writeFile(resolve(__dirname, `${process.argv[2]}.json`), JSON.stringify(rawData, null, 4), (writeFileError) => {
            if (writeFileError) {
                throw Error(writeFileError)
            }
        })
    })

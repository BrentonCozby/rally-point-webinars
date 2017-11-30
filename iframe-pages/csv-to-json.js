const fs = require('fs')
const { resolve } = require('path')
const csv = require('csvtojson')

const rawData = []

csv()
    .fromFile(resolve(__dirname, 'raw-data.csv'))
    .on('json', jsonRow => {
        rawData.push(jsonRow)
    })
    .on('done', csvParsingError => {
        if (csvParsingError) {
            console.error(Error(csvParsingError))
        }

        fs.writeFile(resolve(__dirname, 'raw-data.json'), JSON.stringify(rawData, null, 4), (writeFileError) => {
            if (writeFileError) {
                throw Error(writeFileError)
            }
        })
    })

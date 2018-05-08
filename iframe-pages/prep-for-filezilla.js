/* eslint-disable */

const fs = require('fs')
const path = require('path')

fs.readdir(__dirname, {}, function (err, files) {
    files.forEach(clientName => {
        if (!fs.statSync(path.resolve(__dirname, clientName)).isDirectory()) {
            return
        }

        if (!fs.existsSync(path.resolve(__dirname, clientName, 'webinar.php'))) {
            return
        }

        fs.mkdir(path.resolve(__dirname, 'ready-for-filezilla', clientName), () => {
            fs.mkdirSync(path.resolve(__dirname, 'ready-for-filezilla',  clientName, 'local'))
            fs.mkdirSync(path.resolve(__dirname, 'ready-for-filezilla',  clientName, 'local', 'rallypoint'))

            fs.copyFile(path.resolve(__dirname, clientName, 'webinar.php'), path.resolve(__dirname, 'ready-for-filezilla',  clientName, 'local', 'rallypoint', 'webinar.php'), function (err) {
                if (err) {
                    console.error(err)
                }
            })
        })
    })
})

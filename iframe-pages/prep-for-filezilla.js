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

        if (!fs.statSync(path.resolve(__dirname, 'ready-for-filezilla', clientName)).isDirectory()) {
            fs.mkdirSync(path.resolve(__dirname, 'ready-for-filezilla', clientName))
        }

        if (!fs.statSync(path.resolve(__dirname, 'ready-for-filezilla', clientName, 'local')).isDirectory()) {
            fs.mkdirSync(path.resolve(__dirname, 'ready-for-filezilla',  clientName, 'local'))
        }

        if (!fs.statSync(path.resolve(__dirname, 'ready-for-filezilla', clientName, 'local', 'rallypoint')).isDirectory()) {
            fs.mkdirSync(path.resolve(__dirname, 'ready-for-filezilla',  clientName, 'local', 'rallypoint'))
        }

        fs.copyFile(path.resolve(__dirname, clientName, 'webinar.php'), path.resolve(__dirname, 'ready-for-filezilla',  clientName, 'local', 'rallypoint', 'webinar.php'), function (err) {
            if (err) {
                console.error(err)
            }
        })
    })
})

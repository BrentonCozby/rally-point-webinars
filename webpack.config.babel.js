import webpack from 'webpack'
import { join, sep } from 'path'
require('dotenv').config()

import * as config from './config.js'

export default {
    entry: {
        bundle: [`.${sep}` + join('src', 'js', 'index.js')],
        vendor: [`.${sep}` + join('src', 'js', 'vendor.js')]
    },
    output: {
        filename: `.${sep}` + join('dist', 'js', '[name].js'),
        publicPath: config.PUBLIC_PATH
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['env', {modules: false}],
                            'stage-0'
                        ]
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            PUBLIC_PATH: JSON.stringify(config.PUBLIC_PATH),
            siteTitle: JSON.stringify(config.siteTitle),
            siteName: JSON.stringify(config.siteName),
            description: JSON.stringify(config.description),
            siteUrl: JSON.stringify(config.siteUrl),
            developerName: JSON.stringify(config.developerName),
            developerURL: JSON.stringify(config.developerURL)
        })
    ]
}

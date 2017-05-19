import { resolve } from 'path'
import {
    HotModuleReplacementPlugin,
    NamedModulesPlugin
} from 'webpack'

import { Dir } from '../config.js'

export default {
    entry: {
        bundle: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'babel-polyfill',
            resolve(Dir.src, 'js', 'index.js')
        ]
    },
    output: {
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 40000,
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new NamedModulesPlugin()
    ],
    devServer: {
        hot: true,
        contentBase: Dir.dist,
        publicPath: ''
    },
    devtool: 'eval'
}

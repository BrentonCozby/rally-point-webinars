import { readdirSync } from 'fs'
import { resolve } from 'path'
import { DefinePlugin, NoEmitOnErrorsPlugin } from 'webpack'
import merge from 'webpack-merge'
import HtmlPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import { Dir } from '../config.js'
import devConfig from './dev.js'
import prodConfig from './prod.js'

const TARGET = process.env.npm_lifecycle_event
const env = (TARGET === 'dev') ? 'dev' : 'prod'

let plugins = [
    new HtmlPlugin({
        filename: 'index.html',
        template: resolve(Dir.pages, 'index.pug')
    }),
    new HtmlPlugin({
        filename: 'about.html',
        template: resolve(Dir.pages, 'about.pug')
    }),
    new HtmlPlugin({
        filename: 'services.html',
        template: resolve(Dir.pages, 'services.pug')
    }),
    new HtmlPlugin({
        filename: 'industries.html',
        template: resolve(Dir.pages, 'industries.pug')
    }),
    new HtmlPlugin({
        filename: 'contact.html',
        template: resolve(Dir.pages, 'contact.pug')
    }),
    new HtmlPlugin({
        filename: 'thinking.html',
        template: resolve(Dir.pages, 'thinking.pug')
    }),
    new HtmlPlugin({
        filename: '404.html',
        template: resolve(Dir.pages, '404.pug')
    }),
    new DefinePlugin({
        'process.env': {
           'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
    }),
    new CopyPlugin([
        {from: resolve(Dir.src, 'crossdomain.xml')},
        {from: resolve(Dir.src, '.htaccess')},
        {from: resolve(Dir.src, 'humans.txt')},
        {from: resolve(Dir.src, 'robots.txt')},
        {
            from: Dir.images,
            to: resolve(Dir.dist, 'images'),
            flatten: true
        },
        {
            from: resolve(Dir.src, 'mail', 'contact_me.php'),
            to: resolve(Dir.dist, 'mail')
        }
    ])
]

function hasCut(filename) {
    return filename.split('-')[0] === 'cut'
}

function formatTitle(title) {
    return title
        .replace(/-/g, ' ')
        .replace(/.html/, '')
        .split(' ').map(word => {
            word = word.split('')
            word[0] = word[0].toUpperCase()
            return word.join('')
        }).join(' ')
}

function readFiles(dirname) {
    const filenames = readdirSync(dirname)
    let files = []

    filenames.forEach(function(filename) {
        if(hasCut(filename)) return

        files.push({
            title: formatTitle(filename),
            href: filename
        })

        plugins.push(new HtmlPlugin({
            filename: filename,
            template: resolve(dirname, filename)
        }))
    })

    return files
}

function getArticles(folders) {
    let allArticles = []
    folders.forEach(folder => {
        const files = readFiles(resolve(Dir.articles, folder))
        allArticles = allArticles.concat(files)
    })

    return allArticles
}

// Add articles to the plugins array with html-webpack-plugin
const articlesFolders = ['case-studies', 'the-big-picture', 'Content', 'event-execution', 'Marketing', 'Sales']
const articlesData = getArticles(articlesFolders)
plugins.push(new HtmlPlugin({
    filename: 'additional-content.html',
    template: resolve(Dir.pages, 'additional-content.pug'),
    articles: articlesData
}))

let common = {
    output: {
        path: Dir.dist,
        publicPath: ''
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
            }, {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            }, {
                test: /\.(pug)$/,
                use: ['pug-loader']
            }
        ]
    },
    plugins: plugins,
    resolve: {
        modules: [
            Dir.src,
            'node_modules'
        ]
    }
}

let config;

if(env === 'dev') {
    config = merge(common, devConfig)
}

if(env === 'prod') {
    config = merge(common, prodConfig)
}

export default config

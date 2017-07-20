import { resolve } from 'path'

export const DEV_PATH = __dirname
export const PUBLIC_PATH = '/' // must start with /

export const siteTitle = 'Rally Point Webinars'
export const siteName = 'rally-point-webinars-website'
export const description = 'Webinar Production for when your important people are watching.'
export const siteUrl = 'rallypointwebinars.com'
export const developerName = 'Brenton Cozby'
export const developerURL = 'https://brentoncozby.com'

const Dir = {
    dist: resolve(__dirname, 'dist'),
    src: resolve(__dirname, 'src'),
    css: resolve(__dirname, 'src', 'css'),
    js: resolve(__dirname, 'src', 'js'),
    misc: resolve(__dirname, 'src', 'misc'),
    images: resolve(__dirname, 'src', 'images'),
    vendor: resolve(__dirname, 'src', 'vendor'),
    views: resolve(__dirname, 'src', 'views'),
    pages: resolve(__dirname, 'src', 'views', 'pages'),
    partials: resolve(__dirname, 'src', 'views', 'partials'),
}

export { Dir }

import { resolve } from 'path'

const Dir = {
  src: resolve(__dirname),
  client: resolve(__dirname, 'client'),
  views: resolve(__dirname, 'views'),
  pages: resolve(__dirname, 'views', 'pages'),
  assets: resolve(__dirname, '..', 'assets'),
  images: resolve(__dirname, '..', 'assets', 'images'),
  dist: resolve(__dirname, '..', 'dist')
}

export { Dir }

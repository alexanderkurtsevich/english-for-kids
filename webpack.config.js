const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        cardsPage: './src/cardsPage.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        port: 4200,
          
    }
}
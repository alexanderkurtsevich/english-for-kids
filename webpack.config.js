const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
        cardsPage: './src/cardsPage.js',
        stats: './src/stats.js',
        statsTrain: './src/statsTrain.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devServer: {
        port: 4200,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            }
        ]
    }
}
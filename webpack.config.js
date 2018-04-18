const
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    path = require('path');

module.exports = {
    entry: [
        './src/index.js',
        './src/styles/index.scss',
    ],

    output: {
        path: path.resolve(__dirname, 'static'),
        filename: '[name].js',
    },

    watch: true,

    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 'react', 'es2015', "stage-0"],
                        plugins: ["transform-runtime"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

    resolve: {
        alias: {
            Root: path.resolve(__dirname, 'src'),
            Api: path.resolve(__dirname, 'src/api'),
            Components: path.resolve(__dirname, 'src/components'),
            Actions: path.resolve(__dirname, 'src/redux/actions'),
            Reducers: path.resolve(__dirname, 'src/redux/reducers'),
            Sagas: path.resolve(__dirname, 'src/redux/sagas'),
        },
    },
}

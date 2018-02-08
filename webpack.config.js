const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
    entry: ['./src/client.js', './sass/main.scss'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public'
    },
    watch: true,
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('public/styles.css', {
            allChunks: true
        })
    ],
    devServer: {
        inline: true,
        hot: true,
        // https: true,
        open: true,
        compress: true,
        port: 9003,
        contentBase: path.resolve(__dirname, 'public') // the webpack-dev-server serves the files in the directory provided with contentBase
    },
    stats: { colors: true },
    devtool: 'cheap-module-eval-source-map'
};

const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: '/',
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    devServer: {
        port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'vue-list-autoscroll',
            template: 'index.html',
            filename: 'index.html',
            favicon: 'favicon.ico'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'static/css/[name].[contenthash].css',
            chunkFilename: 'static/css/[id].[contenthash].css',
            ignoreOrder: true
        })
    ]
})
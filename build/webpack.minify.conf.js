const path = require("path")
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

function resolvePath(dir) {
    return path.join(__dirname, "..", dir)
}

const buildConfig = merge(baseWebpackConfig, {
    mode: 'production',
    entry: {
        'vue-autoscroll': './dist/vue-autoscroll.js'
    },
    output: {
        path: resolvePath('dist'),
        publicPath: '/',
        filename: '[name].min.js'
    },
    devtool: false
})

module.exports = buildConfig
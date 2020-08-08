const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolvePath(dir) {
    return path.join(__dirname, "..", dir)
}

module.exports = {
    context: resolvePath(''),
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        alias: {
            '@': resolvePath('src')
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            { 
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    transformAssetUrls: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: ['xlink:href', 'href'],
                        use: ['xlink:href', 'href']
                    }
                }
            },
            { 
                test: /\.js$/,
                loader: "babel-loader",
                include: [
                    resolvePath("src")
                ]
            },
            { 
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        }
                    },
                    // Translates CSS into CommonJS
                    'css-loader',
                    'postcss-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './app/scripts/app'
    ],
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css',{allChunks:true})
    ],
    devServer:{
        contentBase: __dirname,
        hot:true
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "app/scripts"),
                ],
            }
        ],
        loaders: [
            {   test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "app/scripts"),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime'],
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    }
}
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    devtool: 'source-map',
    entry: [
        './app/scripts/app'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('styles.css',{allChunks:true})
    ],
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
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: [
        './app/app'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        //publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css',{allChunks:true}),
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
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "app"),
                ],
                exclude: [
                    path.resolve(__dirname, "app/containers"),
                ],
            }
        ],
        loaders: [
            {   test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "app"),
                ],
                test: /\.js$/,
                plugins: ['transform-runtime'],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|png|gif)$/i,
                loader: 'file-loader?name=images/[name].[ext]'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader!')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
        ]
    },
    resolve : {
        extensions: ['', '.js', '.css','.scss'],
        alias: {
            bootstrapCss : path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css'),
            fontAwesomeCss : path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.css')
        }
    }
}
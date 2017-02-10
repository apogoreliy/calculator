var webpack = require ('webpack');
var ExtractTextPlugin = require ( 'extract-text-webpack-plugin');
var HtmlWebpackPlugin = require ( 'html-webpack-plugin');
var autoprefixer = require ( 'autoprefixer');

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    debug: true,
    noInfo: true,
    entry: [
        './app/app.js'
    ],
    target: 'web',
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './dist/bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new ExtractTextPlugin('./dist/styles.css'),
        new HtmlWebpackPlugin({
            template: 'app/app.js',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            trackJSToken: ''
        }),

        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },
    postcss: ()=> [autoprefixer]
};

var ExtractTextPlugin = require ("extract-text-webpack-plugin");

module.exports = {
    entry: [
        './app/app.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    },
    plugins: [
        new ExtractTextPlugin("./public/styles.css")
    ]
};

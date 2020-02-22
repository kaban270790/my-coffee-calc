const path = require('path');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = {
    mode: 'development',
    context: __dirname,
    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    // devServer: {
    //     hot: true,
    //     port: 3000,
    //     writeToDisk: true
    // },
    entry: {
        "bundle": [path.resolve(__dirname, 'src', 'browser.tsx'), hotMiddlewareScript]
    },
    output: {
        path: path.resolve(__dirname, 'public', 'assets'),
        filename: "[name].js",
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
};

const path = require("path");
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = {
    entry: './dist/index.js',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../libs'),
        libraryTarget: 'umd',
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin( ['dist'], {
            dry: true,
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../dist/typing'),
            to: path.resolve(__dirname, '../dist_example/typing')
        }, {
            from: path.resolve(__dirname, '../package.lib.json'),
            to: path.resolve(__dirname, '../dist_example/package.json')
        }, {
            from: path.resolve(__dirname, '../README.md'),
            to: path.resolve(__dirname, '../dist_example/README.md')
        }])
    ],
    ...baseConfig,
};

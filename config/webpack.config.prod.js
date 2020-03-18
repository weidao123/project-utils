const path = require("path");
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const baseConfig = require('./webpack.config.base');

module.exports = {
    entry: './example/main.ts',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, '../dist_example'),
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            dry: true
        }),
    ],
    ...baseConfig,
};

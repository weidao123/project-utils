const path = require("path");
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.config.base');

module.exports = {
    entry: './example/main.ts',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, '../dist'),
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist_example'),
        hot: true,
        open: false,
        host: 'localhost',
        port: 8088,
        proxy: {
            "/": {
                // target: "http://101.200.187.240:9091/",
                target: "http://127.0.0.1:8080/",
            }
        }
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin({
            dry: true
        }),
        new HtmlWebpackPlugin({
            template: './index.html',               // 会与根目录下的index.html相关联，把根目录下index的东西都放到生成的HTML中
            filename: 'index.html',         // 生成的HTML名，路径为上面output中的path，不填默认是index.html
            title: '测试webpack',
            hash: true,
            chunks: ['main'],  // 多页面分别引入自己的js
            minify: {
                collapseWhitespace: true,  //折叠空白区域 也就是压缩代码
                removeComments: true, //移除HTML中的注释
            }
        })
    ],
    ...baseConfig,
};

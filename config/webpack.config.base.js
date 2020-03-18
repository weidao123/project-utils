const path = require('path');
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue']
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
};

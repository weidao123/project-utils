const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve('dist/index.js'),
    output: {
        filename: 'index.js',
        path: path.resolve('compress')
    },
    plugins: [

    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js$/,  //测试匹配文件,
                include: /\/includes/, //包含哪些文件
                excluce: /\/excludes/, //不包含哪些文件

                //允许过滤哪些块应该被uglified（默认情况下，所有块都是uglified）。
                //返回true以uglify块，否则返回false。
                chunkFilter: (chunk) => {
                    // `vendor` 模块不压缩
                    if (chunk.name === 'vendor') {
                        return false;
                    }
                    return true;
                }
            }),
        ]
    }
};

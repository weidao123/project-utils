const path = require("path");

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
    ...baseConfig,
};

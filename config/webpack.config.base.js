const path = require('path');

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
    }
};

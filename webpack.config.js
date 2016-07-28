var path = require('path');

module.exports = {
    devtool: 'inline-sourcemap',
    entry: './src/main.js',
    output: {
        path: './public',
        filename: './js/bundle.js'
    },
    module: {
        loaders: [
            {
                test:/.?scss$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'style-loader!css-loader'
            },
        ]
    }
};

// npm i -D style-loader css-loader
// $ webpack-dev-server
// $ webpack
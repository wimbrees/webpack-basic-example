var CopyWebpackPlugin = require('copy-webpack-plugin');

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
    },
    plugins: [
        new CopyWebpackPlugin([{ from: './assets', to: './assets' }])
    ]
};

// npm i -D style-loader css-loader
// $ webpack-dev-server
// $ webpack
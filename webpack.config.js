const path = require('path'),
    webpack = require('webpack'),
    TerserPlugin = require('terser-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devtool: 'source-map',
    externals: {
        'react': 'react',
    },
    target: 'node',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: 'linearGradientPicker',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
        {
            test: /\.svg/,
            loaders: ['svg-url-loader']
        },
        {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
            include: path.resolve(__dirname, '../')
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    }
};

const path = require('path');
const webpack = require('webpack');
const bundleOutputDir = './dist';

module.exports = (env) => {
    return [{
        stats: { modules: false },
        entry: { 'main': './main.tsx' },
        resolve: { extensions: ['.ts', '.tsx','.js', '.jsx'] },
        // This is the standard in Visual Studio: resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx',] },
        output: {
            path: path.join(__dirname, bundleOutputDir),
            filename: '[name].js',
            publicPath: 'dist/'
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'awesome-typescript-loader' },
            ]
        }
    }];
};
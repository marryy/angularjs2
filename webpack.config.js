const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'src.bundle.js'
    },
    devServer: {
      port: 8080,
      historyApiFallback: true
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: 'style!css',
        },
        {
          test: /\.html$/,
          exclude: /node_modules/,
          loader: 'file?name=[name].html'
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          loaders: ['style', 'css', 'less']
        },
        {
        test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ]
        }
      ]
     }
};

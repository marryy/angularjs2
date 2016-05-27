const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js/,/\.ts/,
        include: path.resolve(__dirname, 'src'),
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'file?name=[name].html'
      },
      {
        test: /\.js$/,/\.ts$/
        include: path.resolve(__dirname, 'src'),
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.less$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['style', 'css', 'less']
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include: path.resolve(__dirname, 'src'),
        loaders: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

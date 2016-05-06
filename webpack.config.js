const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = (NODE_ENV === 'production');

const config = {
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: 'build',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: __dirname,
      },
    ],
  },
};

if (!isProduction) {
  Object.assign(config, {
    devtool: 'cheap-module-eval-source-map',
  });
}

module.exports = config;

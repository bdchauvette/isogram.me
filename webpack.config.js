const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = (NODE_ENV === 'production');

const config = {
  entry: {
    app: path.join(__dirname, 'src/index.js'),
    vendor: [
      'baobab',
      'baobab-react',
      'isogram',
      'react',
      'react-dom',
      'react-highlight',
    ],
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js',
    publicPath: 'build',
  },
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
        loader: ExtractTextPlugin.extract('style-loader', 'raw-loader'),
        include: __dirname,
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new ExtractTextPlugin('main.css', { allChunks: true }),
  ],
};

if (!isProduction) {
  Object.assign(config, {
    devtool: 'cheap-module-eval-source-map',
  });
}

module.exports = config;

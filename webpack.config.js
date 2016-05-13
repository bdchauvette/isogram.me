const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = (NODE_ENV === 'production');

const extractStylesPlugin = new ExtractTextPlugin(
  'css/main.css',
  { allChunks: true }
);

const config = {
  entry: {
    'js/app': path.join(__dirname, 'src/index.js'),
    'js/vendor': [
      'baobab',
      'baobab-react',
      'classnames',
      'isogram',
      'is-var-name',
      'react',
      'react-copy-to-clipboard',
      'react-dom',
      'react-s-alert',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
        loader: extractStylesPlugin.extract(
          'style-loader',
          ['css-loader', 'postcss-loader'],
          { publicPath: '../css' }
        ),
        include: __dirname,
      },
    ],
  },
  postcss: () => [cssnext],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('js/vendor', 'js/vendor.js'),
    extractStylesPlugin,
  ],
};

if (isProduction) {
  config.devtool = undefined;
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  );
}

module.exports = config;

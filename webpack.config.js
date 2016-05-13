const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssnext = require('postcss-cssnext');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = (NODE_ENV === 'production');

const extractStylesPlugin = new ExtractTextPlugin(
  'main.css',
  { allChunks: true }
);

const config = {
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.join(__dirname, 'src/index.js'),
    vendor: [
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
        loader: extractStylesPlugin.extract(
          'style-loader',
          ['css-loader', 'postcss-loader']
        ),
        include: __dirname,
      },
    ],
  },
  postcss: () => [cssnext],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
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

var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|ttf|woff|woff2|eot)$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  entry: {
    tunatech2017: './assets/2017/js/app.js',
    tunatech2018: './assets/2018/js/app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/tunatech-2017.html',
      inject: 'head',
      filename: 'tunatech-2017.html',
      hash: true,
      chunks: ['tunatech2017']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'head',
      hash: true,
      chunks: ['tunatech2018']
    }),
    new CopyWebpackPlugin([
      { from: 'assets/', to: 'assets/' },
      { from: 'data/', to: 'data/' },
    ]),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    new DynamicCdnWebpackPlugin()
  ]
};

module.exports = config;
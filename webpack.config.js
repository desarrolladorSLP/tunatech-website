var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    app: './assets/js/app.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/tunatech-2017.html',
      inject: 'head',
      filename: 'tunatech-2017.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'head'
    }),
    new CopyWebpackPlugin([
      { from: 'assets/images', to: 'assets/images' },
      { from: 'data/', to: 'data/' },
    ]),
    new webpack.ProvidePlugin({    // <added>
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'   // </added>
    })
  ]
};

module.exports = config;
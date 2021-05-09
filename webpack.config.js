const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const webpack = require('webpack');
require('dotenv').config();
const path = require('path');
module.exports = {

  entry: {
    index: path.resolve(__dirname, 'src/app/index.js')

  }, // webpack entry point. Module to start building dependency graph
  output: {
    path: path.resolve(__dirname, 'dist'), // Folder to store generated bundle
    filename: '.bundle.js', // Name of generated bundle after build
    publicPath: '/' // public URL of the output directory when referenced in a browser
  },
  module: { // where we defined file patterns and their loaders
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.(sass|scss)$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(jpeg|png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      jquery: require.resolve('jquery')
    }
  },
  plugins: [ // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/public/index.html'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY)
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'

    })
  ],
  devServer: { // configuration for webpack-dev-server
    contentBase: './src/public', // source of static assets
    port: 7700 // port to run dev-server
  }
};

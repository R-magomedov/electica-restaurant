const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    home: './src/pages/home/index.js',
    menu: './src/pages/menu/index.js',
    contact: './src/pages/contact/index.js',
  },

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name].[contenthash].js',
    publicPath: '/electica-restaurant/',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        type: 'javascript/auto',
        use: 'babel-loader',
      }

    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/home/index.html',
      filename: 'index.html',
      chunks: ['home'],
      inject: true,
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/menu/index.html',
      filename: 'menu/index.html',
      chunks: ['menu'],
      inject: true,
    }),

    new HtmlWebpackPlugin({
      template: './src/pages/contact/index.html',
      filename: 'contact/index.html',
      chunks: ['contact'],
      inject: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' }
      ],
    }),
  ],

  devServer: {
    static: [
      './dist',
      './public'
    ],
    open: true,
  },

};

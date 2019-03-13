const path = require('path');
const HWP = require('html-webpack-plugin');

const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:
               { loader: 'babel-loader' }
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader', 'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader', 'css-loader', 'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new HWP(
      { template: './src/index.html' }
    ),
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
      systemvars: true,
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};

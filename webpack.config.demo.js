const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src/demo'),
  entry: path.resolve(__dirname, 'src/demo/index.ts'),
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  optimization: {
    minimize: false
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    hot: true,
    host: 'localhost',
    port: 9000,
    watchFiles: path.resolve(__dirname, 'src/demo'),
    client:{
      logging: 'none'
    }
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: 500
  },
  module: {
    rules: [
      {
        test: /\.(m|j)s$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true } }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/index.css'
    }),
    new HtmlWebpackPlugin({
      favicon: path.resolve(__dirname, 'src/favicon.png')
    })
  ]
};

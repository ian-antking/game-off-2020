const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'project.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    publicPath: '/dist',
    compress: true,
    port: 8080
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'assets', to: 'assets' },
        { from: 'dialogue', to: 'dialogue' },
        'index.html'
      ]
    }),
    new HtmlWebpackPlugin({ 
      template: './src/index.html'
    })
  ]
};
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'project.bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    publicPath: '/build',
    compress: true,
    port: 8080
  }
};
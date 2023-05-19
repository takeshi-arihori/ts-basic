const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/
      }
    ]
  }
}
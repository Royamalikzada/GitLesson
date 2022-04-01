const path = require('path');
module.exports = {
  devtool: 'eval-source-map',
  entry: {
    comment: './src/indexComment.js',
    post: './src/indexPost.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
            {loader: "babel-loader"}
        ]
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
};
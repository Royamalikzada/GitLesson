const path = require('path');
module.exports = {
  devtool: 'eval-source-map',
  entry: './src/index.js',
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
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
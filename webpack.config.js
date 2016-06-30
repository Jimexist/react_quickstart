var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      {
        test: /jsx?$/,
        include:path.resolve(__dirname, 'src'),
        loader: 'babel',
      }
    ]
  }
}

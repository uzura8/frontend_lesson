var path = require('path');

module.exports = {
  entry: {
    app: __dirname + '/src/js/app.js'
  },
  output: {
    path: __dirname + '/public/assets/js',
    filename: 'app.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.msx'],
  },
  module: {
  }
};


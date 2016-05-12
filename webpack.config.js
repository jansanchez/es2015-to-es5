module.exports = {
  entry: {
    index: ['./source/index.js']
  },
  output: {
    path: './dist/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          compact: false
        }
      }
    ]
  }
};

const path = require('path')

module.exports = {
  entry: './src/cato.js',
  output: {
    filename: 'cato.js',
    path: path.resolve(__dirname, 'dest')
  }
}
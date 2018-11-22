const config = require('./webpack.config.js')

// Reduces the bundle size in production by retrieving dependencies externally at runtime.
config.externals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'react-redux': 'ReactRedux',
  'redux': 'Redux'
}

config.devtool = 'cheap-source-map'
config.mode = 'production'

module.exports = config

const path = require('path')
const customWebpack = require('../webpack.config')

module.exports = async ({ config }) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: customWebpack.module.rules,
    },
  }
}

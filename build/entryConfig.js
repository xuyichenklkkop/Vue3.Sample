
const path = require('path')

var pageNames = ['index', 'admin']
const HtmlWebpackPlugin = require('html-webpack-plugin')
exports.getEntries = () => {
  var entry = {}

  pageNames.forEach(pageName => {
    entry[pageName] = `./ src / ${pageName}.js` // js文件路
  })
  return entry
}

exports.getPlugins = () => {
  var plugins = []
  pageNames.forEach(pageName => {
    plugins.push(new HtmlWebpackPlugin({
      filename: pageName + '.html',
      template: `./ public / ${pageName}.html`, //模板路径
      inject: true,
      excludeChunks: pageNames.filter(item => item != pageName)
    }))
  })
  return plugins
}
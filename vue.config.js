//用于生成一个或多个html文件
const entries = require('./build/entryConfig')

module.exports = {
  pages: {
    index: 'build/main.js',
    // print: {
    //   entry: 'src/print.js',
    //   // 模板来源
    //   template: 'public/print.html',
    //   chunks: ['chunk-vendors', 'chunk-common', 'print']
    // }
  },
  configureWebpack: config => {
    config.entry = entries.getEntries()
    return {
      plugins: [...entries.getPlugins()]
    }
  },
  //是否在保存的时候使用 `eslint-loader` 进行检查。有效的值：`ture` | `false` | `"error"`  当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/global.scss";`
      }
    }
  }
}
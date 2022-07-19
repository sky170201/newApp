const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  productionSourceMap: false,
  css: {
    // 构建时跟踪css对应的文件及样式所在位置
    sourceMap: true,
    loaderOptions: {
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
        // `primary` is global variables fields name
        // 定义全局样式变量
        lessOptions: {
          globalVars: {
            mainColor: '#0071e3'
          }
        }
      }
    }
  }
})

const path = require('path')
const { name } = require('./package')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const port = 9003

console.log(process.env.VUE_APP_BASEURL)

module.exports = {
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    // proxy: {
    //   '/mock': {
    //     target: process.env.VUE_APP_BASEURL,
    //     changeOrigin: true,
    //   },
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: process.env.VUE_ZY_BASEURL,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ["^" + process.env.VUE_APP_BASE_API]: "", // /dev-api/test
    //     },
    //   }
    // },
    // proxy: process.env.VUE_APP_BASEURL,
    open: true,
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // 让主应用能正确识别微应用暴露出来的一些信息
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}

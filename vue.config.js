module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  configureWebpack:{
    devServer: {
      proxy: 'http://211.34.230.55/atest/A.zip'
    }
  }
}

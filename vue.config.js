module.exports = {
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      },
      open: true, // 自动开启浏览器
      port: 8000,
      proxy: { // 配置代理  解决前端浏览器的跨域问题
        '/info': {
          target: 'http://47.104.232.23:3000', // 目标请求的域名地址
          // host: '*.*.com',
          changeOrigin: true, // 是否重写
          pathRewrite: { // 重写地址
            "^/info": ""
          }
        }
      }
    },
    lintOnSave: false, // 直接关闭eslint检查
    configureWebpack: {
      resolve: {
        alias: {
          assets: '@/assets',
          con: '@/components',
          views: '@/views'
        }
      }
    }
  }
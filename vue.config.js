const webpack = require("webpack"); 
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
  }
module.exports = { 
    lintOnSave: process.env.NODE_ENV === 'development',
    devServer : {
        port: 8080,
        proxy: {
          '/api/': {
             target: 'http://127.0.0.1:5000',
             changeOrigin: true   
          }    
        }
    }, 
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'config': '@/config'
            }
        },
        plugins: [
            new webpack.ProvidePlugin({    
              $: 'jquery',         // 创建 '$'、'jQuery'、'window.jQuery' 三个变量指向依赖jquery
              jQuery: 'jquery',
              'window.jQuery': 'jquery',
              Popper: ['popper.js', 'default']   // 创建 'Popper' 变量指向依赖popper.js。
             })
        ]
    },
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }



}
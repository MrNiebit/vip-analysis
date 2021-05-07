module.exports = {
        outputDir: 'dist',
        publicPath: process.env.NODE_ENV === 'production' ? '/vip-analysis' : '/',
        // 不打包 map文件
        productionSourceMap: false,
        devServer: {
        proxy: {
            '/api': {
                target: 'http://api.lacknb.cn', //目标接口域名
                changeOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '/' //重写接口
                }
                /*
                这里理解成用‘/api’代替target里面的地址，

                                    后面组件中我们掉接口时直接用api代替

                                    比如我要调用'http://127.0.0.1:8989/xxx/duty?time=2017-07-07 14:57:22'，

                                    直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
                */
            }

        }
    },

}
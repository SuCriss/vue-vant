module.exports = {
    lintOnSave:true,
    devServer: {
        host: "localhost",
        port: 8080, // 端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        // proxy: 'http://localhost:8080/',// 配置跨域处理,只有一个代理

        proxy: {
            "/api": {
                target: "https://www.easy-mock.com/mock/5b7a8280bf95d870586e7a86",   // 要请求的后台地址
                ws: false,    // 启用websockets
                changeOrigin: true,    // 是否跨域
                pathRewrite: {
                    "^/api": ""          // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替
                }
            },
        }
    },
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                    require('postcss-plugin-px2rem')({
                        rootValue:75,
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        exclude:/(node_module)/,
                        // selectorBlackList: [], //要忽略并保留为px的选择器
                        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        mediaQuery:false,//（布尔值）允许在媒体查询中转换px。
                        minPixelValue:3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    })
                ]
            }
        }
    }

}
const path = require("path");
module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        // 引入公共文件
        path.resolve(__dirname, "./src/assets/less/common.less")
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "primary-color": "#ec6800"
          },
          javascriptEnabled: true
        }
      },
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 37.5, // vant官方使用的是37.5
            selectorBlackList: ["vant", "mu"], // 忽略转换正则匹配项
            propList: ["*"]
          })
        ]
      }
    }
  }
};

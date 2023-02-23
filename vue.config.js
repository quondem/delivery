const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/delivery/',
  productionSourceMap: true,
  filenameHashing: false
})
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          prepandData: ' @import "@/assets/style.sass"; ',
        },
      },
    },
  },
};

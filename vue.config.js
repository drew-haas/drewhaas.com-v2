module.exports = {
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/main.scss";`,
        sassOptions: {
          scoped: false
        }
      }
    }
  }
}
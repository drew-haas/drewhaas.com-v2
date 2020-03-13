const path = require('path');

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },

    configureWebpack: {
        resolve: {
            alias: {
                "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            }
        }
    },

    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/shared/_variables.scss";`,
                sassOptions: {
                    scoped: false
                }
            }
        }
    }
}
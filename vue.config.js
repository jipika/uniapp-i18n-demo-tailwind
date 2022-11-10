if (process.env.NODE_ENV === 'development') {
    process.env.TAILWIND_MODE = 'watch'
}
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const { UniAppWeappTailwindcssWebpackPluginV4 } = require('weapp-tailwindcss-webpack-plugin')
/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
const config = {
    //....
    configureWebpack: {
        plugins: [
            new UniAppWeappTailwindcssWebpackPluginV4({
                disabled: false,
            }),
        ],
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('webpack-in-loader')
            .loader(require.resolve('./node_modules/webpack-in-loader/index.js'))
            .tap(options => {
                options = {
                    localeFile: path.join(require.resolve('./locale/zh.js')), // 与cli中相同，若生成的时候保持默认，则不需要配置
                }
                return options
            })
        config.module
            .rule('js')
            .use('webpack-in-loader')
            .loader(require.resolve('./node_modules/webpack-in-loader/index.js'))
            .tap(options => {
                options = {
                    localeFile: path.join(require.resolve('./locale/zh.js')), // 与cli中相同，若生成的时候保持默认，则不需要配置
                }
                return options
            })
    },
    //....
}

module.exports = config

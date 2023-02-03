module.exports = {
    outputDir: 'dist',
    indexPath: 'index.html',
    publicPath: '/vue3/',
    // css: {
    //     loaderOptions: { // 向 CSS 相关的 loader 传递选项
    //       less: {
    //         javascriptEnabled: true
    //       }
    //     }
    //   },
    devServer: {
        disableHostCheck: true,
        watchOptions: {
            // 不监听的文件或文件夹，支持正则匹配 意味着node_modules文件变动需要重新运行
            ignored: /node_modules/,
            // 监听到变化后等200ms再去执行动作
            aggregateTimeout: 200,
            // 默认每秒询问1000次
            poll: 1000
        }
    }
}
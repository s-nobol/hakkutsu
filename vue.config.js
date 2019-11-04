module.exports = {

    // https://81b82d2528fb47e99be94707cafd0296.vfs.cloud9.us-east-1.amazonaws.com/
    devServer: {
        compress: true,
        disableHostCheck: true
    
    },
    
    
    // 実行環境用
    // publicPath: '/my-project/',//リポジトリ名
    // outputDir: 'docs',
        
        
    // publicPath: process.env.NODE_ENV === 'production'
    //     ? '/my-project/'
    //     : '/'
}
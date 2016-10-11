/**
 * Created by Administrator on 2016/9/29.
 */
var webpack = require('webpack');
module.exports = {
    devtool: 'sourcemap',
    entry:[ 'webpack/hot/dev-server',__dirname + '/app/public/js/main.js'],
    output:{
        path:__dirname + '/src',
        filename:'bundle.js'
    },
    module: {//在配置文件里添加JSON loader
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!autoprefixer-loader?{browsers:['last 2 version','firefox 15']}!sass"
            },
            {
                test: /\.css$/,
                loader: "style!css!autoprefixer-loader?{browsers:['last 2 version','firefox 15']}"
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: "url?limit=8192"
            }
        ]
    },
    devServer: {
        contentBase: "./",//本地服务器所加载的页面所在的目录
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}
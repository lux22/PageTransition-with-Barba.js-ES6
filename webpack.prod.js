const path = require('path');  
const common = require('./webpack.common');
const {merge}  = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports= merge(common,{
     mode:'production',
     output: {
        filename: "js/[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },  
    plugins: [ 
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({ 
            filename:'index.html',
            template:'./src/index.html'
        }),
        new htmlWebpackPlugin({ 
            filename:'index.html',
            template:'./src/index.html'
        }),
        new htmlWebpackPlugin({ 
            filename:'link-1.html',
            template:'./src/link-1.html'
        }),
        new htmlWebpackPlugin({ 
            filename:'link-2.html',
            template:'./src/link-2.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
        }),
    ],
    module:{
        rules:[
            {
                test:/\.(sa|sc|c)ss$/,
                use:[
                    MiniCssExtractPlugin.loader, /* use style-loader if necessary */
                    'css-loader',
                    'sass-loader'
                ]
            },

        ]
    }
})
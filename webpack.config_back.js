 const path = require('path');  
 const htmlWebpackPlugin = require('html-webpack-plugin');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
 module.exports = {
     entry: ['babel-polyfill','./src/index.js'],
     output: {
         path:path.resolve(__dirname,'dist/'),
         filename:'js/[hash].bundle.js'
     },
     devServer:{
         contentBase:'./dist'
     },
     plugins: [ 
         new CleanWebpackPlugin(),
         new htmlWebpackPlugin({ 
             filename:'index.html',
             template:'./src/index.html'
         }),
         new MiniCssExtractPlugin({
             filename:'css/[hash].css',
         }),
        
     ],
      
     module:{
         rules:[
             {
                test:/\.js$/,
                exclude:/node_module/,
                use:{
                    loader:'babel-loader'
                }
             },
             {
                 test:/\.(sa|sc|c)ss$/,
                 use:[
                     MiniCssExtractPlugin.loader,
                     'css-loader',
                     'sass-loader'
                 ]
             },
             {
                 test:/\.css$\i/,
                 use:[
                     'style-loader',
                     'css-loader',
                     
                 ]
             },
             {
                 test:/\.html$/,
                 use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]'
                        }
                    }
                ],
                 exclude: path.resolve(__dirname,'src/index.html')
             },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'images',
                            publicPath:'images',
                        }
                    }
                ],
            },

         ]
         
     }
 } 
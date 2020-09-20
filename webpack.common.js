const path = require('path');  
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    entry: ['babel-polyfill','./src/index.js'],
    plugins:[
        new CopyWebpackPlugin({
            patterns: [{
                from:path.resolve(__dirname,'src/images'),
                to:'images',
              }
            ],
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
            // {
            //     test:/\.html$/,
            //     use:[
            //        {
            //            loader:'file-loader',
            //            options:{
            //                name:'[name].[ext]'
            //            }
            //        }
            //    ],
            //     exclude: path.resolve(__dirname,'src/index.html')
            // },
 

        ]
        
    }
}
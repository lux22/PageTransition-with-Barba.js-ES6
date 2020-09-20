const path = require('path');  
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

// // // Our function that generates our html plugins
// function htmlPluginGenerator (templateDir) {

//     const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
//     return templateFiles.map(item => {
//       const parts = item.split('.');
//       const name = parts[0];
//       const extension = parts[1];
//         return new htmlWebpackPlugin({
//             filename: `${name}.html`,
//             template:  `${templateDir}/${name}.${extension}`
//         })
//     })
//   }

// const htmlPlugins = htmlPluginGenerator('./src');
module.exports = merge(common, {
    mode:'development',
    output: {
        path:path.resolve(__dirname,'dist/'),
        filename:'js/[name].bundle.js'
    },    
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
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
        ]

    },
    plugins: [ 
        
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
    ]
    
})
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode:'development',
    entry:path.join(__dirname,'src','main.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    devtool:'inline-source-map',
    module:{
      rules:[
          {
              test:/\.js$/,
              loader:['babel-loader'],
              include:path.join(__dirname,'src'),
              exclude:/node_modules/
          }
      ]  
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer:{
        port:3000,
        contentBase:path.join(__dirname,'dist')
    }
}
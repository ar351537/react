var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 devtool: 'cheap-module-eval-source-map',
 entry: {
   app: [
   'webpack/hot/dev-server',
   'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, "webclient", "clientapp.jsx")]
 },
 output: {
   path: path.join(__dirname, "webclient", "dist"),
   publicPath: "/dist/",
   filename: "bundle.js"
 },
 module: {
     rules: [
              {
               test: /\.jsx$/,
              loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
              },
              {
                test: /\.css$/,
                loader:"style-loader!css-loader",
                include: [/flexboxgrid/,/react-select/]
              },
              {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['file-loader']
              }
            ]
 },
 watch:true,
 resolve: {
   extensions: ['*', '.js', '.jsx', '/index.js', '/index.jsx']
 },
 plugins: [new webpack.optimize.OccurrenceOrderPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new webpack.NoEmitOnErrorsPlugin(),
       new HtmlWebpackPlugin({ template: path.resolve('./webclient/index.html') })]
};
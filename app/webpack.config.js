const ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{ test: /\.jsx?$/,exclude: /node_modules/,loader: 'babel'},
        {
        test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        loader: 'imports?define=>false&this=>window'
    },
        
    { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
        new ExtractTextPlugin('./style.css', {
            allChunks: true
        })
    ],
  devServer: {
    hot:true,
    historyApiFallback: true,
    contentBase: './'
  }
};
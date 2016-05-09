var webpack = require('webpack'),
    path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function getArticles(){
  return new HtmlWebpackPlugin({  // Also generate a test.html 
      filename: 'test.html',
      template: 'src/assets/test.html'
    });
}

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: './app/boot.ts',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: "/",
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: [ root('node_modules/rxjs') ] }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({  // Also generate a test.html 
      filename: 'index.html',
      template: 'blog/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // Define the main entry point for our app.
  //
  entry : './client/index.jsx',

  // Our destination location and file.
  //
  output : {
    path : path.resolve(__dirname, 'public'),
    filename : 'scripts.js'
  },

  // Here we specify additional loaders to be used for certain types of files.
  //
  module : {
    rules : [

      // All .js or .jsx files will be transpiled through the babel loader.
      //
      {
        test : /\.(js|jsx)$/,
        use : [ 'babel-loader' ]
      },

      // All .css files will go through the style-loader and the css-loader.
      //
      {
        test : /\.css$/,
        use : [ 'style-loader', 'css-loader' ]
      },

      // Specify the types of image files to be loaded as resource assets.
      //
      {
        test : /\.(png|svg|jpg|gif)$/,
        type : 'asset/resource'
      }
    ]
  },

  // Specify how to resolve imports with no file suffix.
  //
  resolve: {
    extensions: ['.js', '.jsx']
  },

  // Use the "html-webpack-plugin" to auto-generate our top level "index.html" file.
  //
  plugins: [
    new HtmlWebpackPlugin({
      template : 'client/index.html',
      favicon : 'client/favicon.ico'
    })
  ]
}

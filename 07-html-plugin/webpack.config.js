const path = require('path');

// Note that unlike loaders, we need to use "require" to load the plugin so that
// we can directly call into it in the plugin setup.
//
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

  // Specify the html-webpack-plugin to be executed in order to create our resulting HTML file
  // in the final output directory. By default this plugin will create an HTML file from scratch
  // but here we specify that the plugin should use "client/index.html" as a template and insert
  // any additional code that is needed. We also specify that "client/images/favicon.ico" be used
  // as the favicon image. That will ensure that the "favicon.ico" file is copied into the output
  // folder.
  //
  plugins: [
    new HtmlWebpackPlugin({
      template : 'client/index.html',
      favicon : 'client/images/favicon.ico'
    })
  ]
}

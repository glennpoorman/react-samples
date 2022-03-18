const path = require('path');

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

      // All .css files will go through the style-loader and the css-loader. Note that
      // we're using two loaders for .css files and also note that the order of use is
      // reverse from the order they're listed below. The "css-loader" interprets "import"
      // commands on css files and reads the file contents. The "style-loader" will then
      // inject those styles using a "<style>" tag into the web page where they're imported.
      //
      {
        test : /\.css$/,
        use : [ 'style-loader', 'css-loader' ]
      },

      // Specify how to load image files. Prior to Webpack 5, we used  the file-loader to
      // load images files, copy them to the output folder, and mangle their name. As of
      // Webpack 5, you can get the same functionality without installing any additional
      // loaders by specifying a section to set certain types of files as resource assets.
      // This results in Webpack doing exactly what the file-loader used to do without any
      // need to install the added loader.
      //
      {
        test : /\.(png|svg|jpg|gif)$/,
        type : 'asset/resource'
        // use : [ 'file-loader' ] <== the loader we used prior to Webpack 5
      }
    ]
  },

  // Specify how to resolve imports with no file suffix.
  //
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

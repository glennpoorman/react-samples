const path = require('path');

module.exports = {

  // Define the main entry point for our app. Any other files/modules will be pulled in from
  // there via "import" statements.
  //
  entry : './client/index.jsx',

  // Our destination location and file. Here we specify that all output goes into the
  // "public" folder into the file "scripts.js". Note that this file, previously created
  // via Babel is now created using Webpack while still using Babel to transpile the
  // code.
  //
  output : {
    path : path.resolve(__dirname, 'public'),
    filename : 'scripts.js'
  },

  // Here we specify additional loaders to be used for certain types of files.
  //
  module : {
    rules : [

      // All .js or .jsx files will be transpiled through the babel loader. Note that
      // the .babelrc file is still used to determine which plugins/presets to use.
      //
      {
        test : /\.(js|jsx)$/,
        use : [ 'babel-loader' ]
      }
    ]
  },

  // By default, you can leave the .js extension off when importing js files in your code.
  // Here we specify that if a name with no extension doesn't resolve to a .js file, try
  // the extension .jsx.
  //
  resolve: {
    extensions: ['.js', '.jsx']
  }
}

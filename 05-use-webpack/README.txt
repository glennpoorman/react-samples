use-webpack
-----------
In the previous two samples, we've introduced code transpiling which allows us to use all of
the latest JavaScript language features and also allows us to write our React render function
so that they read more like HTML as opposed to a bunch of JS function calls. On the client side
of things though, we still have one big monolithic JS file that contains all of our code. Again
this is a tiny sample so it's not a huge deal but as your client side code grows, maintaining
it this way is simply untenable.

Using Webpack, we can separate our code into multiple modules. During the build step, Webpack
will intelligently bundle all of those modules together into a final result (the single JS
file). Furthermore, this allows us to use keywords like "require" or "import" in our client
side JS code freeing us up to use some of the frameworks we had the luxury of using on the
server side.

By itself, Webpack works on JS or JSON files taking the name of a single file to use as an
entry point. Webpack will start with that file and then scan for any "require" or "import"
statements recursively doing the same for those files until it builds up a dependency tree
of all the files in a project. The tree is then used to bundle the contents of all of those
files in the correct order into the resulting singular JS file.

Additional packages called "loaders" can also be used in the Webpack pipeline to provide
support for other types of files and also to provide additional processing to be performed
on certain types of files during processing. For example, the "babel-loader" package can
be used in the Webpack process to run files through Babel for transpiling while they are
being bundled.

To add Webpack to our build, we need to install three additional dev dependencies.

  webpack      - The Webpack framework
  webpack-cli  - The Webpack command line interface
  babel-loader - The loader that will run JS/JSX files through Babel for transpiling
                 during the bundling process.

In addition, we can now strip out the script tags in our "index.html" file that pull down
the React scripts from the web and, instead, install React as an NPM package that we can
"import" into our code. So in addition to the items above, we also want to install the
packages "react" and "react-dom" as dependencies (NOTE: NOT dev dependencies).

  npm install react react-dom --save

In addition, we also need a config file for Webpack named "webpack.config.js". Inside of
that file we define the main entry point to our client code, the output file and destination,
and the loaders to use while bundling. See the comments in that file for more detail on the
file format.

With all of that in place, we can start breaking our client code up into "Components". This
makes development on the client side much nicer to manager and is where more of the power of
React starts coming into play.

Try It
------

We now use Webpack to do our build phase. You can run one of two scripts for this.

* Run "npm run build:prod" from the command line. This does a one time build of the client
  code and outputs the result into the "public" folder. Note that if you inspect the final
  "scripts.js" file, it is minified and unreadable.

* Run "npm run build:dev" from the command line. This does a build of the code outputting
  the results into the "public" folder but then waits and watches. If any changes are made
  to your client files, an immediate rebuild takes place. Note that when we build development
  code, the resulting "scripts.js" file is NOT minified which means it can be read and
  debugged.

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that visually this sample is identical to
the previous sample.

What's Different?
-----------------

* "package.json". Made several changes to the dependencies.

  Installed two new dependencies.

  - react, react-dom. From now on, instead of using script tags to reference "js" files on the
    web, we'll install React as a dependency. Just as we used two scripts tags in the previous
    samples, we install two packages here. "react" is the core package used for defining components
    while "react-dom" is the DOM rendering package.

  Installed three new dev dependencies.

  - webpack, webpack-cli. These are the packages required to use the Webpack bundler. One for
    the core framework and the other for the command line interface.

  - babel-loader. This is the loader used by Webpack to transpile JS/JSX files through Babel
    during the bundling process.

  Removed @babel/cli. Webpack is calling directly into Babel so this package is no longer needed.

  Two new scripts. In addition to the "start" script, we also added two scripts for building
  (transpiling and bundling) our code in to the final destination folder.

  - "build:dev". Use "npm run build:dev" to bundle our code. This script will also keep running
    and watch for any changes to our client files and rebuild whenever any changes occur.

  - "build:prod". Use "npm run build:prod" to bundle our code and exit.

* "webpack.config.js". All of our Webpack options go here such as the entry point, our
  destination folder, and the various loaders and plugins to be used. See the file comments
  for details.

* "public/index.html". The references to the React JS files have been removed and this file has
   been simplified back down to pulling in just the local "styles.css" style sheet and "scripts.js"
   script file.

* "client/index.jsx". This is still the main entry point for the client code. Most of the actual
  code has been removed and put in other files. This file uses "import" to pull in the components
  needed to render (including React itself) and still calls the function to render the "App".

* "client/components". This is a new folder where we'll put all of our components.

* "client/components/App.jsx". The "App" component has been moved into its own file. The file
  uses "import" to pull in what it needs to render and exports the "App" component right at
  the bottom. This is critical enabling the "App" to be imported.

* "client/components/MovieQuote.jsx". The "MovieQuote" component has also been moved into its
  own file. The file uses "import" to pull in what it needs to render and exports the component
  right at the bottom.

  Also note here that we import the "superagent" module that we were only able to use previously
  in the server code. We use "superagent" to send the HTTP request to fetch a new movie quote.
  See file comments for details. 

more-loaders
------------
The previous sample saw the introduction of Webpack. Using Webpack, we were able to bundle
multiple JS files into a single output file. By default, Webpack works on JS and/or JSON files
by starting with the file designated as the entry point and then following any "import" or
"require" statements to find additional files to bundle. We also showed how you can specify
additional processing by using loaders. In the previous sample we specified use of the Babel
loader to not only add JSX files to what is bundled but also to run JS and JSX files through
the Babel transpiler.

In this sample, we want the bundling process to also handle style sheets and image files. To 
that end, we'll add the use of the "css-loader" and "style-loader" (for style sheets) and we'll
add the use of asset modules (for image files).

Let's start with style sheets. We'll add a section to "webpack.config.js" where we specify that
any file with a "css" suffix that is imported using "import" statement be run through the loaders
"css-loader" and then "style-loader" (in that order). At build time, the first loader simply reads
the contents of the css file returning those contents as a string. The second loader then takes
that string and injects those styles into the resulting web page using a "<style>" element in the
page's "<head>" section. This way, we are able to move the style sheet into the "client" folder
and inject the contents right into the web page.

Image files are handled just a bit differently. Prior to Webpack 5, we would setup the loader
"file-loader" to kick in if any files with standard image file suffixes were imported using the
"import" statement. The loader would copy the image file into the output folder and mangle the file
name ensuring that the resulting name was unique. The full url of the image would be returned to
the code where it could be used to specify the "src" of an "<img>" tag.

Webpack 5 introduced "asset modules". Asset modules is a type of module that allows you to import
certain types of files (images, fonts, icons, etc) without having to install additional loaders.
The setup for asset modules is very similar to using a loader. In the "webpack.config.js" file,
we setup a certain behavior to be applied to any files with the suffix "png", "svg", "jpg", or
"gif". Instead of specifying the loader to use though, we add a "type" property and specify that
those files are of the type "asset/resource". This tells Webpack to perform the same operation
that "file-loader" used to perform in older version of Webpack.

Try It
------

Build the client code by running either "npm run build:prod" or "npm run build:dev".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note the addition of the banner of various movie
stills right under the title.

What's Different?
-----------------

* "package.json". The additional loaders are added as dev dependencies.
  - "file-loader" for loading image files.
  - "css-loader", "style-loader" for loading/processing style sheets.

* "webpack.config.js". The new loaders are configured for use during the bundling process.
  - "file-loader" is configured to be used on "png", "svg", "jpg", or "gif" files.
  - "css-loader", "style-loader" are configured to be used on "css" files.

* "public/styles.css". This file from the previous samples has been removed.

* "client/index.css". This file contains all of the styles that were previously contained in
  the file "public/styles.css". This file is then loaded at build time via the "import" statement
  in the code.

* "client/index.html". The "<style>" tag that previously pulled in "styles.css" has been removed.
  The styles will be injected into the page at build time.

* "client/index.jsx". This file now uses an "import" statement to pull in "index.css" from the
  same folder. The loader will read the css file and inject the styles directly into the page.

* "client/images". This is a new folder that contains eight new image files. These are still
  pictures from some movies that will be used as a banner just under the title of the page.

* "client/components/Banner.jsx". This is the new React component that will render the banner.
  The images are loaded using the "import" statement and the resulting urls are stored in an
  array in the component's state variable. The images are then rendered when the component's
  render function is called.

* "client/components/App.jsx". The app render function is modified to render the new banner in
  between the header and the movie quote.
  

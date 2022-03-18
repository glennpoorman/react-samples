html-plugin
-----------
So far we've moved all of our JS code out of the "public" folder and into a development area and
showed how to use Webpack to bundle up our results making them consumable by any existing browser.
We've also used Webpack to load images at build time and to load style sheets directly into a web 
page thus removing the style sheet from the "public" folder as well. At this point, the only items
left in that folder are the "favicon.ico" file and the top level "index.html" file. Additionally,
the HTML file has been stripped down to simply including the main scripts file and adding the
single "<div>" element with the id "app". Ideally, it would be nice to strip those last two items
out of that folder and use Webpack to make them part of the bundle. In a perfect world then, there
would be no "public" folder at all until we run our build at which point the folder would be
generated on the fly. As it turns out, we can actually do all of that.

In addition to being able to specify loaders to run during the bundling process, Webpack also has
the idea of a "plugin" that can be run as well. While a loader is used on individual files to allow
file level processing during the bundling process, Webpack plugins generally work at the bundle
level allowing additional processing to be done at the end of the bundling process.

In this sample, we introduce the "html-webpack-plugin". Simply put, this plugin auto-generates
an "index.html" in the output folder. By default, the plugin creates an "index.html" that pulls
in the generated "scripts.js". The rest of the file is empty with the title "Webpack App" and is
not much use. As you might expect though, the plugin can be configured in "Webpack.config.js"
allowing us more control over the end result. For starters, you could add a "title" in order to
replace the generic "Webpack App". The body of the HTML is still empty though and we need our
"<div>" element with the "app" id. What we can do is to put a simple HTML file in our input folder
and designate that file to be used as a template for generating the output. That file will contain
just the page title and the "<div>" element. The plugin will fill in anything else we need and
generate a new "index.html" in the output folder. We can also specify where the "favicon.ico"
image file is so that the plugin will copy it into the output folder which, of course, means that
file can be moved as well.

With that then, the "public" folder can be completely removed. It will be generated at build time
along with all of the contents that we need.

Try It
------

Build the client code by running either "npm run build:prod" or "npm run build:dev". Note that
there is no "public" folder until this step is run.

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that visually this sample is identical to
the previous sample.

What's Different?
-----------------

* "package.json". The Webpack plugin "html-webpack-plugin" is installed as as dev dependency.

* "webpack.config.js". The new plugin is configured here. Note the added "require" statement at
  the top. Unlike the loaders, the plugin needs to be loaded in order for us to call into it
  directly. At the bottom, we add a "plugins" section and new up an "HtmlWebpackPlugin" instance
  specifying the following parameters:

  - "template" specifies the template file for generating the resulting "index.html".
  - "favicon" specified the "favicon.ico" file that will be copied into the output folder.

* "client/images/favicon.ico". This file was moved here from the "client/public" folder.

* "client/index.html". This is the template to be used for generating the file of the same name
  in the output folder. Note that this file is mostly the same as the old one except that the
  "<script>" element has been removed leaving only the page title and our main "<div>" element.

* "public". This folder is now removed and will be generated at build time.

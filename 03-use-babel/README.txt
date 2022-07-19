use-babel
---------
In this sample we begin to look at transpiling code. Visually this version of "Movie Quotes" is
identical to its predecessor. The big difference is the JavaScript code that is delivered to the
client and how that code comes to be.

In the previous sample, we edited the client side JavaScript code removing all references to jQuery
and re-writing the code to use React. In order to do that, we introduced some newer JavaScript syntax
that won't be supported across all versions of all browsers. As we said before, we have no control
over what any given user is using to view these pages and while it might feel good to pound our fist
on the table and insist that they update, it's generally considered bad business to do that. That's
where Babel comes in.

Babel is a JavaScript transpiler that you can use to convert any JavaScript code that it understands
into code that is backward compatible with even the oldest browsers that are still functioning out
there. The Babel framework uses a series of plugins to do its work. Which plugins are used is up to
you. Consider something simple like a function definition that reads:

  const toConsole = (str) => console.log(str);

Kind of a dumb function but look at the syntax. The arrow syntax for defining functions wasn't
introduced until ES2015 so if you tried to execute that code using a browser that doesn't support
this syntax (Internet Explorer for example), you would get a syntax error. You don't want to be
hamstrung though and not able to use the newer niceties of JavaScript. So the answer is to code
as you see fit and then let Babel transpile your code into old JavaScript. The first thing you
need to do then is install the Babel core and cli libraries.

  npm install @babel/core @babel/cli --save-dev 

This installs the core Babel framework and the command line interface. By itself, the Babel framework
doesn't do anything though. If you were to send the above code snippet in, you'd get the same code
out. This is because Babel needs at least one plugin to be installed into the framework. If you look
at the plugins list at (https://babeljs.io/docs/en/plugins-list), you'll see that there are quite a 
lot of plugins. You'll find them for all manner of syntax changes or enhancements added over the
years. To make our line of code work for example, you would use the "arrow-functions" plugin. This
requires another installation.

  npm install @babel/plugin-transform-arrow-functions --save-dev

With the plugin installed, there is one more change required. In your top level folder you need
to create a ".babelrc" file and include the plugin in that file. That file is read by Babel at
run time and Babel will use the contents to determine which plugins to load. For our line of code
above, the entire contents of the file would look like:

  {
    "plugins" : ["@babel/plugin-transform-arrow-functions"]
  }

Now let's assume you've put the single line of code up above into a file named "toConsole.js". Now
you can run Babel from the command line (assuming you're in your project folder where Babel was
installed) as follows:

  npx babel toConsole.js

The output should look something like:

  var toConsole = function toConsole(str) {
      return console.log(str);
  }

So far this is great but there have been a ton of enhancements and changes to the JavaScript
language over the years and you certainly can't be expected to go out and install every single
plugin that you need to transpile modern code back to pre-2015 era JS. This is where you can
use "presets" instead. A Babel preset is basically a collection of plugins all grouped together
so that you don't have to know each and every plugin needed for a task. For the base JavaScript
language, you can get every plugin required to take modern day code back to pre ES2015 JavaScript
by using the "preset-env" preset. You do this the same way you use a plugin. First you install
the preset.

  npm install @babel/present-env --save-dev

Then you edit the ".babelrc" file making sure to note that the "plugins" label now reads "presets".

  {
    "presets" : ["@babel/present-env"]
  }

With everything in place, we can take our "scripts.js" file from the previous sample, run the
entirety of it through Babel, and generate code that anyone can execute. You can do this by hand
running Babel from the command line, but it's better to add a build step as a script in the
"package.json" file. This way we have tighter control over the source and destination files.
For our sample then, we've removed the "scripts.js" file from the "public" folder and put its
contents into a new file named "index.js" and put it into a new folder named "client". Then a 
script was added to "package.json" that reads:

  "build": "babel client/index.js > public/scripts.js"

All the rest of our code remains unchanged.

Try It
------

NEW STEP: Run "npm run build" to transpile our client JS code into "public/scripts.js".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that visually this sample is identical
to the previous sample.

What's Different?
-----------------

* "package.json". Three new dev dependencies are added.

  - "@babel/core" the core Babel framework
  - "@babel/cli" the Babel command line interface
  - "@babel/preset-env" the collection of plugins for transpiling newer JS code to old JS code.

  Also added a new "script" named "build" which needs to be run in order to transpiler our JS
  code from the client folder into "public/scripts.js" which can be run in any browser.

* ".babelrc". This file is a local Babel configuration file for your project and will specify
  which plugins and/or presets Babel should use to process incoming code.

* "public/scripts.js". This file has been removed and will be generated at build time.

* "client". A new folder has been created that will hold client side code.

* "client/index.js". This file holds the client side JavaScript code that, in the previous
  sample, was contained in "public/scripts.js".

vanilla-react
-------------
In this sample we start to dive into React. Visually, this "Movie Quotes" app is identical in
every way to the previous. Under the client-side hood though, we strip out the old jQuery code
entirely and replace it with calls into the vanilla React APIs.

At its heart and in spite of what you may have seen so far, React is simply a library of utilities
for creating components and manipulating the DOM. Most samples or tutorials you find on the topic
overwhelm right out of the gate with talk of transpilers and use of all kinds of frameworks for
managing, transpiling, and bundling your code. That is all good stuff and we'll get to some of
that but we need to start a bit simpler so that you can actually follow what all of those things
do for you.

Like jQuery or even the native JavaScript APIs, React consists of functions for creating and
manipulating DOM elements. That means that, just as with jQuery, you can achieve the bare minimum
by simply pulling the React script files into your HTML pages and then calling the APIs to do what
you need to do.

In this sample, we replace all of the old jQuery code with React code. As you'll see, this doesn't
necessarily pretty up our code or make it easier to understand but that's largely because this is
a simple sample and also because we're using React in its raw form. As we move through the samples,
we'll introduce tools that will hide some of the complexities and you'll begin to see how powerful
React becomes with larger projects.

Try It
------

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that visually this sample is identical to
the previous sample.

What's Different?
-----------------

* "public/index.html". The script tag that previously referenced a local "jquery.js" file has been
  replaced with two script tags that reference two React "js" files directly from the web. The
  first is the core React code that is used for defining components and the second is the set of
  "js" utilities for creating and manipulating DOM elements.

* "public/scripts.js". This file still performs the same functions as the previous sample but has
  been completely re-written to use "React" as well as many of the extensions to the JavaScript
  language (specifically ES6 classes).

What's horribly wrong with this picture
---------------------------------------
All in all this provides a glimpse into what's going on at the heart of React but you would never
ever want to develop an app this way much less release it out into the world.

For starters, the base React APIs are ugly. This is a very simple app and already some of the code
is starting to look a little busy. If you get much more complex, the code could become virtually
unreadable and an absolute nightmare for someone to manage much less debug.

React code relies heavily on the most recent additions to the JS language. This means that you
immediately alienate anyone whose browser isn't 100% up to date. You can argue all night about why
someone wouldn't take free updates to their browser but that's a separate discussion and it's just
considered good business to try and back support within bounds of reason. Plus there may be language
enhancements that haven't been absorbed by the big browsers yet.

Right now all of our code is in one file. While an environment like Node has supported modules for
a while, browsers are only just starting to support this and it's still flakey. For a sample like
this, one monolithic file with all of our JS code might be a minor inconvenience. If you get much
more complex though, it becomes downright ridiculous.

We're pulling JS files direct from the web and it's up to us to pull in the right ones. Right now
this sample pulls in development files. When we're ready to deploy however, we'll need to remember
to go in and change those references to production/minified JS files.

Of course, many of these issues can be solved by adding tools to your environment that will bundle
your client code up for consumption by just about any browser and transpile the newer language
enhancements into older code. These tools have existed for quite some time outside of React and
work quite well. That's exactly where we'll be heading in the coming samples.

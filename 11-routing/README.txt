routing
-------
This sample will provide just a bit of an introduction to the React Router. In the "NodeJS"
samples, we began discussing the idea of "routes" as soon as we started to interact with the
server. When we got to the sample on authentication (titled "oauth"), we touched a bit on the
idea of client side routing when we started deciding which page to display upon entry depending
on whether the current user was logged in or not. Routing in the client goes further than that
though. Displaying links is a form of routing as is automatic navigation from one page to another.
In React, this becomes more complicated because we're generally rendering components as opposed to
displaying pages.

React Router is the standard library for client side routing in React. Using React Router, your
rendering functions can inspect the paths that led there and make decisions on how to render.
Elements in the router library can also be used for navigation either forcing immediate redirect
to another location or for displaying links on a page that will redirect when clicked.

In this first router sample, we'll introduce the idea of a 404 page. Up until now, unrecognized
routes sent to the server would result in a simple 404 error being sent back. At that point we 
left it up to the browser to handle it which usually meant some ugly error text or display of a
stock page sent back by Express. It would be better to display a nice styled 404 page that looks
like it's part of the movie quotes app and also provide that page with a link that takes you back
to the main page.

In addition, we'll add a navigation bar just under the header that will contain the selections
"Home" and "About". Selecting "Home" will route back to the main page and selecting "About" will
display a nicely styled "About" page describing our app (as if it really required explanation).

We can accomplish this by introducing some simple client side routing. This means re-writing our
top level app renderer to inspect the route that triggered the render and making decisions on how
to proceed based on that route. We'll keep it simple looking for three possible routes. The main
route which displays the app as we always have, an "/about" route which will display our "About"
information, and a "catch all" route that will display the 404 page.

Visually, every page/route will contain the header with the app title as well as the navigation
bar. What comes after will vary depending on the route. Stylistically though, everything will look
like it is supposed to be part of the movie quotes app.

Try It
------

Build the client code by running either "npm run build:prod" or "npm run build:dev".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that there is now a navigation bar just
under the header with the items "Home" and "About" justified to the right. Selecting "Home" will
always display the main page and selecting "About" will display an "About" page containing some
app information. In addition, you can see the 404 page in action simply by typing some bad routes
(like "http://localhost:3000/badness) into the address bar of your browser.

What's Different?
-----------------

* "package.json". Added the dependency "react-router-dom" which is a package of utilities to
  manage dynamic client-side routing in React.

* "server/server.js". Added a wildcard for any GET requests that we don't explicitly recognize
  which will serve the main "index.html" file. This will essentially kick the route back to the
  client to handle allowing the client to display a nicely styled custom "Error 404" page. See 
  the comments in "server.js" regarding some of the issues this creates.

* "client/index.jsx". The main render call now wraps the "App" component with a "BrowserRouter"
  component imported from "react-router-dom". This is required for any of the underlying routing
  utilities to work.

* "client/components/Main". This new component now contains all of the application state data,
  the event handling code, and the rendering for the main quotes page. The "App" will still render
  the header and the new "Nav" component and then use the routing to determing how the rest of the
  page will look.

* "client/components/Nav". New navigate bar component that will appear under the header. The only
  items in the bar are a "Home" selection and an "About" selection both rendered using a "<Link>"
  element from the React Router library that will send the route back to the "App".

* "client/components/About". This is a new component that simply puts up a nice styled page that
  describes a little about what this application is.

* "client/components/App". The application state data, the event handling functions, and the
  rendering of the main quotes page is all moved to "Main". The "App" now renders the header,
  the navigation bar, and then uses the React Router elements to check what the incoming path
  is and to route accordingly depending on that path. See the comments in "App" for details.
  
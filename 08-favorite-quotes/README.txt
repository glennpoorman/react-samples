favorite-quotes
---------------
This samples goes back to React proper. Here we re-introduce the "Favorite" list back into the
movie quotes app. Like the previous sample, the page displays a random movie quote but now the
page also contains a list of favorite quotes. As a user, you can add to that list and delete
individual items from the list.

Under the covers we introduce additional hierarchy to our React component modeling and we also
introduce the concept of lifting the state. In React, when several components are reflecting the
same changing state data, the easiest way to manage this is to lift that data up to the lowest
common ancestor. We discuss this in more detail in the code domments for the React components.

Try It
------

Build the client code by running either "npm run build:prod" or "npm run build:dev".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note that in addition to the random movie
quote, the page now contains an added "Favorites" list along with buttons allowing you to
add to and delete from the list.

What's Different?
-----------------

* "client/index.css". Added styles for favorites list.

* "client/components/App.jsx". The "App" component has been promoted and is now a full class as
  opposed to simply a function. The component now contains the state data for the entire app which
  now consists of the current quote as well as the current list of favorite quotes. A constructor
  has been added to make requests to intialize the state data on startup. The app also contains
  the event handling functions to fetch a quote from the server, add a quote to the favorites list,
  delete a quote from the favorites list, and fetch all of the favorites list. The render function
  now renders the new "Favorites" component as well as the "Banner" and "MovieQuote". The data
  required for those lower level components to render is now passed through as properties when
  rendered.

* "client/components/MovieQuote.jsx". The "MovieQuote" component has been scaled down quite a bit.
  With the state data moved up to the app, the quote component really only needs to render. The
  data needed to render is referenced via the "props" property which is where all the data goes
  that was specified as properties when the quote was rendered.

* "client/components/Favorites.jsx". The "Favorites" component is simply a container for multiple
  "Favorite" components. Like the "Banner", the render function for the "Favorites" compoent shows
  how a component can render an array of child components.

* "client/components/Favorite.jsx". The "Favorite" component is an individual item in the favorites
  list. Like the "MovieQuote" component, the "Favorite" component's render function gets the data
  it needs to render from the "props" property. In addition, a "Delete" button is rendered on each
  individual favorite quote. If that button is clicked, code in the "Favorite" component parses
  the original quote id from the DOM element and calls a callback in the app to actually delete
  the item from both the DOM and the server.

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const { logRequest, validateCookie } = require('./utilities');
const { sendQuote } = require('./movieQuote');
const { sendFavorites, addFavorite, deleteFavorite } = require('./favorites');
const { authorize, sendToken } = require('./oauth');

// Create the express app.
//
const app = express();

// Setup our middleware.
//
app.use(logRequest);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

// Authorization is turned off for now so we'll comment out the installation
// of the cookie validate middleware function and put it back later on.
//app.use(validateCookie);

// Setup our routes for this sample.
//
app.get('/oauth', authorize);
app.get('/oauth/code', sendToken);
app.get('/movie-quote', sendQuote);
app.get('/favorite-quotes', sendFavorites);
app.post('/favorite-quotes', addFavorite);
app.delete('/favorite-quotes', deleteFavorite);

// Add a wildcard route that basically serves the main index page. What this will do will be
// to kick any incoming routes that we don't explicitly handle back over to our React code
// where we can either then handle it as a client-side route or put up a 404 page.
//
// PLEASE NOTE!!!
// This solution is problematic. It works for the very top level routes but not for second level
// routes. Consider what happens if you type in "http://localhost:3000/xx/yy". We'll fall in here
// and serve back "index.html" which is fine. Inside of that file though, there is a script tag
// that reads <script src="scripts.js"></script>. The script tag was inserted when the code was
// transpiled and the "src" property is a relative filename. So when the browser processes that
// script tag, a GET request will be sent for "localhost:3000/login/scripts.js". That file doesn't
// exist so the request will fall in here and send back "index.html". The browser, expecting a JS
// file, will then try to begin executing code and an error will occur immediately leaving you with
// a blank page and a cryptic error in your console that reads:
//
//   Uncaught SyntaxError: Unexpected token <
//
// Which is correct actually. The first line of the file is <!DOCTYPE html> which is NOT valid
// JavaScript.
//
// I'm still poking around trying to find a better solution to this. We could create a standalone
// 404 page that we serve directly from here for any and all unknown routes but it seems like we
// shouldn't have to do that.
//
app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

// Run the server and listen on port 3000 for any requests.
//
app.listen(3000, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }

  console.log('Server is listening on port: 3000');
});

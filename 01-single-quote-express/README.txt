single-quote-express
--------------------
In order to start looking at React, we're going to go back to the "Movie Quotes" app from the
"NodeJS" samples. But we're going to go back to the very first version that simply displayed a
single movie quote on the sreen along with a button that allowed the user to fetch a new quote
(the sample title "ajax"). We want to keep using the added frameworks we added in the sample
titled "frameworks" though.

The idea here then is to create a starting point. We've taken the "frameworks" sample from the
"NodeJS" samples and scaled back the client side to match what was in the "ajax" sample. The
server code has been left alone and can be considered complete leaving us to focus only on the
client throughout these samples (with the exception of access validation which we'll touch on
below).

Try It
------

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". Note the simple web page displayed containing
a single movie quote and a button underneath that reads "Next Quote". Now push the button and note
that the quote changes. Keep pushing the button and note that a new quote appears with each push.

What's Different?
-----------------

* It is assumed that you've gone through the "NodeJS" samples and you're familiar with the
  "Movie Quotes" app that appeared in most of the samples.

* We've scaled the client side code back to match the sample titled "ajax" from the NodeJS samples.
  The code itself is still written using jQuery but we'll be changing that in short order.

* For the most part, the server code is identical to the server code in the sample titled
  "frameworks" with the exception of some tweaks noted below. Several routes are now unused but
  we'll introduce them back in later.

  - "server/server.js". Commented out the line that installs the "validateCookie" utility as 
    middleware. Since we've temporarily removed authorization from the client, all of our server
    calls will fail unless we remove this validation. We'll revisit when we bring authorization
    back.
  
  - "server/favorites.js". Went back to a hard coded "favorites.json" file. Right now we're not 
    working with favorites at all but we will bring those back before bringing back authorization.
oauth
-----


Try It
------

Build the client code by running either "npm run build:prod" or "npm run build:dev".

Start the server by running "npm start" from the command line.

Point your web browser to "http://localhost:3000". In this sample we bring back authorization
which means that your first visit to the app will take you to a login page displayed with a
single "Login with GitHub" button. In order to proceed, the user must have a valid GitHub account
and must login. Upon succcessful login, the browser proceeds to main quotes page. A "Logout"
button is added to the navigation bar which, when clicked, will log the user out and then redirect
back to the original login page.

What's Different?
-----------------

* "client/components/App".

  Added "loggedIn" and "logout" utilities for handling user login and logout on the client.
  Specifically verifying a valid cookie with an authentication token as well as clearing that
  cookie to handle logout.

  Added "withNav" utility that we can use to wrap an element we render in a route so that it 
  includes the navigation bar.

  Added "onLoggedIn" property specification when rendering "Main" which will call the new utility
  letting the "Main" component know whether or not the user is currently logged in.

  Added new routes "/login" and "/logout" which will render the new "Login" and "Logout"
  components respectively (see comments below).

* "client/components/Main". Added "isLoggedIn" property which will be inspected on render and if
  the user is not currently logged in, will redirect to the "/login" route.

* "client/components/Nav". Added an additional link "Logout" which will redirect to the "/logout"
  route.

* "client/components/Login". Any time a user is redirected to "/login", they will be taken to this
  component which will show the option to "Login with GitHub" which will, when selected, send the
  "/oauth" route to the server for authentication.

* "client/components/Logout". 

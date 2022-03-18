oauth
-----
This sample continues to investigate the React Router by re-introducing authentication back into
the movie quotes app. Just like the sample from "nodejs-samples" of the same name, the application
now wakes up showing a login page prompting the user to "Login with GitHub". If the user logs in
successfully, they will be redirected to the main quotes app page. In addition, a new "Logout"
selection is added to the navigation bar that, if selected, will log the user out and redirect
back to the login page.

This is handled using React routes just like the previous sample. A new route "/login" will render
a new "Login" component will the new "/logout" route will render the "Logout" component. Upon
initial entry into the app rendering code, we'll pass the main component a flag stating whether or
not the user is currently logged in. If they are, we proceed as normal. If not, we'll redirect to
the "/login" route which will take us back to the app rendering function but this time using the
different route. That route will render the "Login" component.

When the user logs out (via a new selection in the navigation bar), we'll redirect to the "/logout"
component. Again this will take us back to the app rendering function with a different route that
will render the "Logout" component. The "Logout" component is a bit of an odd duck though. This
component won't actually render anything you can see. The render function will first call a utility
to log the user out by removing the movie quotes cookie from the document. After that, it will
render a single "Navigate" component (from "react-router-dom") essentially redirecting back to the
app again specifying the "/login" route. At this point, our user is starting over.

Also note that the logout rendering could have just as easily redirected to the "/" route as the
main app functionality would have queried to see if the user is logged in and then would have
redirected to "/login" achieving the exact same result.

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

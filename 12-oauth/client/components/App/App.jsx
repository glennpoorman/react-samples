import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

// Define the main "App" component.
//
class App extends Component {

  // Function checks to see if the user is logged in by searching the document cookies
  // for a cookie named "movie-quote-token". If it's found, we return true. If not, we
  // return false.
  //
  loggedIn = () => {

    const cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      const ca = cookies[i].split('=');
      if (ca[0].trim() === 'movie-quote-token') {
        return true;
      }
    }
    return false;
  }

  // Function logs the user out by locating the "movie-quote-token" and marking it as
  // expired/deleted.
  //
  logout = () => {

    document.cookie = 'movie-quote-token=deleted; expires=' + new Date(0).toUTCString();
  }

  // Function wraps the specified component in a fragment along with the "<Nav>" component.
  //
  // In this sample, we don't want all of our routes to display the navigation bar. Specifically,
  // we don't want the new "<Login>" component to display the navigation bar. To fix this, we
  // could move the rendering of the "<Nav>" component down to the other individual components
  // where we want to see it. Or, when we specify the element to render in the "<Route>", we
  // can make that element a fragment containing both the navigation bar as well as the component
  // we want to render.
  //
  // That's what we'll do actually but in order to keep the rendering somewhat clean, we'll write
  // a utility function here that, given a component, will return a fragment wrapping the input
  // component preceeded by a "<Nav>" component.
  //
  withNav = (component) => {

    return (
      <>
        <Nav />
        {component}
      </>
    );
  }

  // Render the "App" component.
  //
  render() {

    return (
      <>
        <Header />
        <Routes>

          {/* For the "/" route, render the "Main" component along with the navigation bar. Also
              note that the main path now passes the "isLoggedIn" property to the "Main" component
              flagging whether the user is currently logged in or not. */}

          <Route path='/' element={this.withNav(<Main isLoggedIn={this.loggedIn()} />)} />

          {/* For the "/login" route, render the new "Login" component and passes the "isLoggedIn"
              property stating whether the user is currently logged in or not. Note that we do NOT
              render the navigation bar with this component. */}

          <Route path='/login' element={<Login isLoggedIn={this.loggedIn()} />} />

          {/* For the "/logout" route, render the new "Logout" component passing in the utility
              function that removes the cookie from the document thus logging the user out. We
              do NOT render the navigation bar with this component. */} 
            
          <Route path='/logout' element={<Logout onLogout={this.logout} />} />

          {/* The "/about" route and the 404 route are still the same but are now wrapped with the
              utility that includes the navigation bar. */}

          <Route path='/about' element={this.withNav(<About />)} />
          <Route path='*' element={this.withNav(<NotFound />)} />
        </Routes>
      </>
    );
  }
}

export default App;

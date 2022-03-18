import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';

// Define the main "App" component.
//
// The meat of the application (the state data, the event handling functionality, and most of the
// main page rendering) has been moved out of the application and into the new "Main" component.
// This was done to leave the "App" unfettered so that it could focus on handling routing.
//
// The idea is that no matter what, a user will always see at least a header with the application
// title and the navigation bar. After that, what the user sees depends on how we got here. The
// new navigation bar contains two links ("Home" and "About"). The first will redirect to the "/"
// route and the second to the "/about" route. Either way, we'll fall back in here and the render
// function below will determine how the page is rendered depending on how we got here.
//
// In addition, we also add handling for any other routes in order to display our own 404 page.
//
function App() {

  // After rendering the header and navigation bar the same way we have been, we create a
  // "<Routes>" element which will hold all of our possible routes (consider it like a "switch"
  // statement in most C-like programming languages). The general format of each route is
  //
  //   <Route path element />
  //
  // Where "path" is the path that got us in here and "element" is the component to render for
  // that particular path. In the three routes below, we cover the main route "/" which will then
  // render the main page of the app, the "/about" route which will render the "About" page, and
  // then the "*" route which is our catch all for anything we don't recognize. That last one will
  // render the new 404 page telling the user the page they requested was not found.
  //
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );      
}

export default App;

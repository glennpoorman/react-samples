import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

// Define the "Nav" component.
//
// This is a simple navigation bar that will appear under the header. Items in the navigation bar
// will be rendered using the "<Link>" component from "react-router-dom". This routes back to the
// main "App" where the render code there will decide how to render the page based on the incoming
// route.
//
// So why not simply render an "<a>" tag. In this case we probably could but remember that React
// interacts with a virtual DOM. By using the React functions, we are letting React decide which
// parts of the DOM need to be re-rendered where as the "<a>" element would always force a complete
// re-render of the entire page. Another by-product of using "<Link>" is that it routes strictly
// within the client. In other words, the route specified in the "<Link>" element will not be sent
// to the server.
//
// A simple rule to follow when deciding whether to use "<Link>" or "<a>" is to ask yourself if
// you're about to link to an external page or an internal page. If the page is not part of your
// React app, use "<a>". If it is part of your app, use "<Link>".
//
function Nav() {

  return (
    <div className={styles['nav-container']}>

      {/* Note the "<Link>" element. We specify "/" and "/about" as the routes without really
          knowing what that's going to mean. This will leave it up to the "App" to decide how
          to render the rest of the page. */}

      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </div>
  );
}

export default Nav;

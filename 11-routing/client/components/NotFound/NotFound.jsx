import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

// Define the "NotFound" component. This is nice styled 404 page that we'll render when we
// encounter a route that we don't recognize. Note that like the new "Nav" component, we render
// a "<Link>" component from "react-router-dom" that will redirect back to the main page when the
// link is selected.
//
function NotFound() {

  return (
    <div className={styles["container-404"]}>
      <h2>We can't seem to find the page you're looking for.</h2>
      <Link to='/'>Return to Home Page</Link>
    </div>
  );
}

export default NotFound;

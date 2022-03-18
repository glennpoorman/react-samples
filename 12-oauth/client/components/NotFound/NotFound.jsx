import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

// Define the "NotFound" component.
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

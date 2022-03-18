import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

// Define the "Nav" component.
//
function Nav() {

  return (
    <div className={styles['nav-container']}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/logout'>Logout</Link>
    </div>
  );
}

export default Nav;

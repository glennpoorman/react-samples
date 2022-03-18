import React from 'react';
import styles from './About.module.css';

// Define the "About" component.
//
function About() {

  return (
    <div className={styles['about-container']}>
      <h1>About Movie Quotes</h1>
      <i>Movie Quotes</i> is a simple web application that serves up quotes from famous
      films. The quotes themselves come from a third party package. The app was created
      by Glenn Poorman in order to show simple samples of writing server code using
      <i>NodeJS</i> and client code using <i>React</i>. 
      <br/><br/>
      Full code for these samples is available at
      <a href='https://github.com/glennpoorman'>https://github.com/glennpoorman</a>
    </div>
  );
}

export default About;

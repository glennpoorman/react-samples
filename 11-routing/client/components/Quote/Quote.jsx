import React from 'react';
import styles from './Quote.module.css';

// Define the "Quote" component.
//
function Quote(props) {

  return (
    <div className={styles.quote}>
      <div>{props.quote}</div>
      <div>{props.film}</div>
    </div>
  );
}

export default Quote;

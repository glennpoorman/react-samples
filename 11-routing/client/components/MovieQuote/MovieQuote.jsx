import React from 'react';
import Quote from '../Quote/Quote';
import styles from './MovieQuote.module.css';

// Define our "MovieQuote" component.
//
function MovieQuote(props) {

  return (
    <div className={styles["movie-quote"]}>
      <div>
        <Quote quote={props.quote} film={props.film} />
      </div>
      <button onClick={props.onNextQuote}>Next Quote</button>
      <button onClick={props.onAddFavorite}>Add to Favorites</button>
    </div>
  );
}

export default MovieQuote;

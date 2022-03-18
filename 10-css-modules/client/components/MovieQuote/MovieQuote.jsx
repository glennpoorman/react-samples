import React from 'react';
import Quote from '../Quote/Quote';

// Import the style sheet for this component. Note the file naming format "{component}.module.css".
// The "module.css" portion signals the loader that we're using CSS modules and will load the
// styles from the file into a local object (named "styles" here) and will also mangle all of the
// class names to ensure that they are unique within the application.
//
import styles from './MovieQuote.module.css';

// Define our "MovieQuote" component.
//
function MovieQuote(props) {

  // Note that by using the imported "styles" object to specify the class name, we are actually
  // using the mangled name matching the style that was injected into the head of the page.
  //
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

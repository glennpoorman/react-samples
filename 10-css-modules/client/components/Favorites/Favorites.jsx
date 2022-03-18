import React from 'react';
import Favorite from '../Favorite/Favorite';

// Import the style sheet for this component. Note the file naming format "{component}.module.css".
// The "module.css" portion signals the loader that we're using CSS modules and will load the
// styles from the file into a local object (named "styles" here) and will also mangle all of the
// class names to ensure that they are unique within the application.
//
import styles from './Favorites.module.css';

// The "Favorites" component represents a list of favorite quotes.
//
function Favorites(props) {

  // Note that by using the imported "styles" object to specify the class name, we are actually
  // using the mangled name matching the style that was injected into the head of the page.
  //
  return (
    <div className={styles.favorites}>
      <h2>Favorites</h2>
      {props.favorites.map(f =>
        <Favorite key={f.id} id={f.id} quote={f.quote} film={f.film}
                  onDelete={props.onDelete} />
      )}
    </div>
  );
}

export default Favorites;

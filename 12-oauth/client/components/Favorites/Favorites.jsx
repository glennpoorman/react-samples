import React from 'react';
import Favorite from '../Favorite/Favorite';
import styles from './Favorites.module.css';

// The "Favorites" component represents a list of favorite quotes.
//
function Favorites(props) {

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

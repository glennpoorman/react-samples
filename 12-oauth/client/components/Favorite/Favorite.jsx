import React, { Component } from 'react';
import Quote from '../Quote/Quote';
import styles from './Favorite.module.css';

// The "Favorite" component represents a single favorite quote.
//
class Favorite extends Component {

  // Local "Delete" button handler parses the id of the selected favorite and calls back to the
  // parent to perform the deletion.
  //
  handleDelete = (e) => {

    const quoteDiv = e.target.parentNode;
    const qid = parseInt(quoteDiv.id.split('-')[2]);
    this.props.onDelete(qid);
  }

  // Render the component.
  //
  render() { 

    return (
      <div id={'favorite-quote-' + this.props.id} className={styles.favorite}>
        <button onClick={this.handleDelete}>Delete</button>
        <Quote quote={this.props.quote} film={this.props.film} />
      </div>
    );
  }
}

export default Favorite;

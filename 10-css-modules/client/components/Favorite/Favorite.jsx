import React, { Component } from 'react';
import Quote from '../Quote/Quote';

// Import the style sheet for this component. Note the file naming format "{component}.module.css".
// The "module.css" portion signals the loader that we're using CSS modules and will load the
// styles from the file into a local object (named "styles" here) and will also mangle all of the
// class names to ensure that they are unique within the application.
//
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

    // Note that by using the imported "styles" object to specify the class name, we are actually
    // using the mangled name matching the style that was injected into the head of the page.
    //
    return (
      <div id={'favorite-quote-' + this.props.id} className={styles.favorite}>
        <button onClick={this.handleDelete}>Delete</button>
        <Quote quote={this.props.quote} film={this.props.film} />
      </div>
    );
  }
}

export default Favorite;

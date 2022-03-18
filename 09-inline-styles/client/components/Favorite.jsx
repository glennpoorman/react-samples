import React, { Component } from 'react';
import Quote from './Quote';

// The "Favorite" component represents a single favorite quote.
//
class Favorite extends Component {

  // Define the styles to use for this element.
  //
  // Some things to note:
  //
  // 1. Style definitions read almost the same as in CSS but note that all style names are in
  //    camel case (as JS doesn't allow dashes in property names) and semicolons have been
  //    replaced by commas (as we are now initializing a JS object).
  //
  // 2. String values can be used to specify any value exactly as you would in CSS. For numeric
  //    values, numeric constants can be used and React will automatically convert them to "px".
  //    If you want some other unit of measure (like "1.2em") then simply continue to specify
  //    the value as a string.
  //
  styles = {

    // Define the style to use for the favorite quote container.
    //
    favorite : {
      background : 'steelBlue',
      borderRadius : 0,
      borderTop : '1px solid white',
      boxShadow : '5px 5px 5px grey',
      boxSizing : 'border-box',
      color : 'white',
      padding : '8px 16px'
    },

    // Define the style for the "Delete" button in the favorite quote container.
    //
    favoriteButton : {
      borderRadius : 0,
      float : 'right',
      marginTop : 8,
      padding : '2px 12px',
      width : 'auto'
    }
  }

  // Local "Delete" button handler parses the id of the selected favorite and calls back to the
  // parent to perform the deletion.
  //
  handleDelete = (e) => {

    const quoteDiv = e.target.parentNode;
    const qid = parseInt(quoteDiv.id.split('-')[2]);
    this.props.onDelete(qid);
  }

  // Render the component. Note that we use the "style" property to specify our style objects. The
  // property itself is not new but when used this way, React will replace the value with the text
  // representation of the style in the final bundle.
  //
  render() { 

    return (
      <div id={'favorite-quote-' + this.props.id} style={this.styles.favorite}>
        <button onClick={this.handleDelete} style={this.styles.favoriteButton}>Delete</button>
        <Quote quote={this.props.quote} film={this.props.film} />
      </div>
    );
  }
}

export default Favorite;

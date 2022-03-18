import React, { Component } from 'react';
import Quote from './Quote';

// Define our "MovieQuote" component. Note that since we're adding styles, we've converted the
// component back into a class definition.
//
class MovieQuote extends Component {

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

    // Define the style for the outer container containing the movie quote and all of the button
    // controls for the app.
    //
    outerQuote : {
      marginLeft : 'auto',
      marginRight : 'auto',
      width : '80%'
    },

    // Define the style for the inner container containing the movie quote.
    //
    innerQuote : {
      background : 'steelBlue',
      borderRadius : 8,
      boxShadow : '5px 5px 5px grey',
      boxSizing : 'border-box',
      color : 'white',
      padding : 16
    },

    // Define the style for all of the buttons used in this component.
    //
    quoteButton : {
      borderRadius : 8,
      marginRight : 6,
      marginTop : 18,
      outline : 'none',
      padding : '6px 18px',
      width : 160
    },
  }

  // Render the component. Note that we use the "style" property to specify our style objects. The
  // property itself is not new but when used this way, React will replace the value with the text
  // representation of the style in the final bundle.
  //
  render() {

    return (
      <div style={this.styles.outerQuote}>
        <div style={this.styles.innerQuote}>
          <Quote quote={this.props.quote} film={this.props.film} />
        </div>
        <button style={this.styles.quoteButton} onClick={this.props.onNextQuote}>Next Quote</button>
        <button style={this.styles.quoteButton} onClick={this.props.onAddFavorite}>Add to Favorites</button>
      </div>
    );
  }
}

export default MovieQuote;

import React, { Component } from 'react';
import Favorite from './Favorite';

// The "Favorites" component represents a list of favorite quotes.
//
class Favorites extends Component {

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
    favorites : {
      marginLeft : 'auto',
      marginRight : 'auto',
      width : '80%'
    }
  }

  // Render the component. Note that we use the "style" property to specify our style objects. The
  // property itself is not new but when used this way, React will replace the value with the text
  // representation of the style in the final bundle.
  //
  render() { 

    return (
      <div style={this.styles.favorites}>
        <h2>Favorites</h2>
        {this.props.favorites.map(f =>
          <Favorite key={f.id} id={f.id} quote={f.quote} film={f.film}
                    onDelete={this.props.onDelete} />
        )}
      </div>
    );
  }
}
 
export default Favorites;

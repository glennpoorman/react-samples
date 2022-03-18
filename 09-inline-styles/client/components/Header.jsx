import React, { Component } from 'react';

// Define the "Header" component containing the app title.
//
class Header extends Component {

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

    // Define the style to use for our header element.
    //
    header : {
      background : 'steelBlue',
      boxShadow : '0px 5px 5px grey',
      color : 'white',
      fontSize : 48,
      fontStyle : 'italic',
      margin : '0px 0px 24px 0px',
      padding : 8,
      textAlign : 'center',
      textShadow : '3px 3px 4px lightGrey'
    }
  }

  // Render the component. Note that we use the "style" property to specify our style objects. The
  // property itself is not new but when used this way, React will replace the value with the text
  // representation of the style in the final bundle.
  //
  render() { 
    return <header style={this.styles.header}>Movie Quotes</header>
  }
}

export default Header;

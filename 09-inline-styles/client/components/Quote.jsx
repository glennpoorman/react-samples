import React, { Component } from 'react';

// Define the "Quote" component. This is a new component that simply renders the two "div"
// elements that hold the quote text and the film name. This component is shared by the main
// "MovieQuote" component and the "Favorite" component and the styles required for rendering
// these elements are encapsulated here.
//
class Quote extends Component {

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

    // Define the style to be used for the element that holds the quote.
    //
    quote : {
      fontStyle : 'italic'
    },

    // Define the style to be used for the element that holds the film name.
    //
    film : {
      fontWeight : 'bold'
    }
  }

  // Render the component. Note that we use the "style" property to specify our style objects. The
  // property itself is not new but when used this way, React will replace the value with the text
  // representation of the style in the final bundle.
  //
  // NOTE: In all of the previous samples in both the "NodeJS" and "React" samples, the dash in
  //       front of the film name was done using a style. That choice put more flexibility as to
  //       how the quote is displayed in the hands of the styles. As near as I can tell, there
  //       really isn't any way to do that using inline styles so we've instead hard coded the
  //       dash into the render below. This works, of course, but feels more permanent and less
  //       flexible.
  //
  render() { 
    return (
      <div>
        <div style={this.styles.quote}>{this.props.quote}</div>
        <div style={this.styles.film}>- {this.props.film}</div>
      </div>
    );
  }
}

export default Quote;

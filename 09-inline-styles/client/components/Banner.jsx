import React, { Component } from 'react';
import still_1 from '../images/still1.jpg';
import still_2 from '../images/still2.jpg';
import still_3 from '../images/still3.jpg';
import still_4 from '../images/still4.jpg';
import still_5 from '../images/still5.jpg';
import still_6 from '../images/still6.jpg';
import still_7 from '../images/still7.jpg';
import still_8 from '../images/still8.jpg';

// Define the "Banner" component.
//
class Banner extends Component {

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

    // Define the style used for the element containing the banner.
    //
    banner : {
      display : 'table',
      margin : '12px auto',
      textAlign : 'center',
      whiteSpace : 'nowrap',
      width : '80%'
    },

    // Define the style for the individual div elements containing a single image.
    //
    bannerDiv : {
      display : 'table-cell'
    },

    // Define the style for the image itself.
    //
    bannerImg : {
      maxWidth : '100%'
    }
  }

  // Initialize the state data with the imported images.
  //
  state = { stills : [
    still_1,
    still_2,
    still_3,
    still_4,
    still_5,
    still_6,
    still_7,
    still_8
  ]}

  // Render the component. Note that we use the "style" property to specify our style objects. The
  // property itself is not new but when used this way, React will replace the value with the text
  // representation of the style in the final bundle.
  //
  render() { 
    return (
      <div style={this.styles.banner}>
        {this.state.stills.map((s, i) => {
          return (
            <div style={this.styles.bannerDiv} key={i}>
              <img style={this.styles.bannerImg} src={s}/>
            </div>
          );
        })}
      </div>
    );
  }
}
 
export default Banner;

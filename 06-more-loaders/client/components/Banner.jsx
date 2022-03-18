import React, { Component } from 'react';

// We're going to reference eight image files from the "../images" folder. This is where asset
// modules kick in. When we use "import" on an image file (with a suffix from the list specified
// in webpack.config.js), the image file will be copied into the destination folder, the file name
// will be mangled to ensure it's unique, and the url to the image file in its final destination
// will be returned to the code where we can then use it for the "src" tag when we render "img"
// elements in our render function.
//
import still_1 from '../images/still1.jpg';
import still_2 from '../images/still2.jpg';
import still_3 from '../images/still3.jpg';
import still_4 from '../images/still4.jpg';
import still_5 from '../images/still5.jpg';
import still_6 from '../images/still6.jpg';
import still_7 from '../images/still7.jpg';
import still_8 from '../images/still8.jpg';

// So now define our "Banner" component that will display still images as a banner just below the
// app header and title.
//
class Banner extends Component {

  // We're going to initialize our state variable with an array of the image urls we imported
  // above. As an array, the images will be easier for us to render. See the comments in the render
  // function below.
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

  // Now render our component. The component is made up of a single "div" element containing the
  // images. Each image is another "div" element with an "img" element inside. The urls for the
  // images we're rendering are contained in an array. There are two things to note here.
  //
  // 1. To render an array of components, the array itself can simply be referenced directly as
  //    long as that array contains React components. The only data we have access to here is the
  //    array of image urls in the state.
  //
  //    To convert that array into an array of React components on the fly, we call the JavaScript
  //    "map" function returning a copy of the array and calling our specified code to convert
  //    each element. Here we write code that, for each element, creates a "div" component which,
  //    inside, contains an "img" element that uses the image url to set the "src" tag.
  //
  // 2. Note the "key" property when rendering each component. When rendering a list of items,
  //    React requires a unique "key" for each item in order to identify those items and keep track
  //    of items that require a DOM change. If we'd left this item off, the code would have actually
  //    still appeared to work but if you checked the console of your browser, you would see an
  //    error that looked something like:
  //
  //      Warning: Each child in a list should have a unique "key" prop.
  //
  render() { 
    return (
      <div className='stills-container'>
        {this.state.stills.map((s, i) => {
          return (
            <div key={i}><img src={s}/></div>
          );
        })}
      </div>
    );
  }
}
 
export default Banner;

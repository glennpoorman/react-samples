import React, { Component } from 'react';
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

  // Render the component.
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

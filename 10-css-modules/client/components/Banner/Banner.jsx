import React, { Component } from 'react';
import still_1 from './still1.jpg';
import still_2 from './still2.jpg';
import still_3 from './still3.jpg';
import still_4 from './still4.jpg';
import still_5 from './still5.jpg';
import still_6 from './still6.jpg';
import still_7 from './still7.jpg';
import still_8 from './still8.jpg';

// Import the style sheet for this component. Note the file naming format "{component}.module.css".
// The "module.css" portion signals the loader that we're using CSS modules and will load the
// styles from the file into a local object (named "styles" here) and will also mangle all of the
// class names to ensure that they are unique within the application.
//
import styles from './Banner.module.css';

// Define the "Banner" component.
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

    // Note that by using the imported "styles" object to specify the class name, we are actually
    // using the mangled name matching the style that was injected into the head of the page.
    //
    return (
      <div className={styles.banner}>
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

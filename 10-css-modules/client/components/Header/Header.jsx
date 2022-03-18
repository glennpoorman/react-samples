import React from 'react';

// Import the style sheet for this component. Note the file naming format "{component}.module.css".
// The "module.css" portion signals the loader that we're using CSS modules and will load the
// styles from the file into a local object (named "styles" here) and will also mangle all of the
// class names to ensure that they are unique within the application.
//
import styles from "./Header.module.css";

// Define the "Header" component containing the app title. Note that since we've removed the
// styles from the component, we can convert the component into a simple function.
//
function Header() {

    // Note that by using the imported "styles" object to specify the class name, we are actually
    // using the mangled name matching the style that was injected into the head of the page.
    // So if the mangled name was (for example) "ZXG9M02EyPfhqfu7U02e", the resulting HTML for the
    // line below would be:
    //
    //   <header class="ZXG9M02EyPfhqfu7U02e">Movie Quotes</header>
    //
    return <header className={styles.header}>Movie Quotes</header>
}

export default Header;

// Even though we only explicitly reference "ReactDOM" in the code below, it is required that we
// import both "react" and "react-dom". When the JSX code is transpiled into JavaScript, we are
// still making API calls into the "React" module so both imports are required.
//
// NOTE: A new React transform should be available in Babel 8 that will relax this requirement.
//
import React from 'react';
import ReactDOM from 'react-dom';

// Our "App" definition is split out into its own file so in order to render it, we must import
// it here.
//
import App from './components/App';

// Called to render the application when the script is loaded.
//
ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'

// We still import the main "index.css" file here but if you look at the file contents, you'll see
// that there is only one style definition left and that is our "body" style. Styles that are
// defined to apply to elements of a certain type like this are still global and cannot be defined
// inline.
//
ReactDOM.render(<App />, document.getElementById('app'));

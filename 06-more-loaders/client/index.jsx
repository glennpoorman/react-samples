import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Import the style sheet. This is now the only reference to the css file. By referencing the
// file here using "import", the contents of the file are loaded (via "css-loader") and those
// contents are then inserted into the web page within a "<style>" tag (via "style-loader").
//
import './index.css'

// Called to render the application when the script is loaded.
//
ReactDOM.render(<App />, document.getElementById('app'));

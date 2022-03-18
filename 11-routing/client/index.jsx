import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css'

// Called to render the application when the script is loaded.
//
// Note that we now wrap the "<App>" component with a "<BrowserRouter" component imported from
// the "react-router-dom" package. This is absolutely required for any routing functionality from
// the React Router to work.
//
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));

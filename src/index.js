import React from 'react';
import ReactDOM from 'react-dom';
// The primary styles for the application
import './sass/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Routing for the app
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

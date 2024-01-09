import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebseContext } from './store/Context'
import Context  from './store/Context'
import firebase from './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < FirebseContext.Provider value={firebase}>
      <Context>
      <App />
      </Context>
    </ FirebseContext.Provider>
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App isLoggedIn={false}/>
  </React.StrictMode>
);
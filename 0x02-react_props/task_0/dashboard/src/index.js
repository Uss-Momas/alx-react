import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const notifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
notifications.render(
  <React.StrictMode>
      <Notifications />
  </React.StrictMode>
);
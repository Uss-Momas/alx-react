import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from './close-icon.png';

export default function Notifications() {
  const createLatestNotification = () => { return { __html: getLatestNotification() }; }
  const handleClick = (event) => {
    console.log("Close button has been clicked");
  }
  return (
    <div className="Notifications">
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={createLatestNotification()}></li>
        </ul>
      </div>
      <button aria-label='Close' onClick={handleClick}>
        <img src={closeIcon} alt="close-icon.png" />
      </button>
    </div>
  );
}
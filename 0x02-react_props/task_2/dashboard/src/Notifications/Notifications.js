import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  const handleClick = (event) => {
    console.log("Close button has been clicked");
  }
  return (
    <div className="Notifications">
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={getLatestNotification()} />
        </ul>
      </div>
      <button aria-label='Close' onClick={handleClick}>
        <img src={closeIcon} alt="close-icon.png" />
      </button>
    </div>
  );
}
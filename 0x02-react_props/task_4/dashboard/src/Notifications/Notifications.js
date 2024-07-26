import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer = true }) {
  const handleClick = (event) => {
    console.log("Close button has been clicked");
  }
  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      {displayDrawer && (<div className="Notifications">
        <div>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
        <button aria-label='Close' onClick={handleClick}>
          <img src={closeIcon} alt="close-icon.png" />
        </button>
      </div>)}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

export default Notifications;
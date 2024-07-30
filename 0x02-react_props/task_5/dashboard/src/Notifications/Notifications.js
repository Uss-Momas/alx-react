import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer = true, listNotifications = [] }) {
  const handleClick = (event) => {
    console.log("Close button has been clicked");
  }
  return (
    <>
      <div className="menuItem">
        <span className='my-notifications'>Your notifications</span>
        {displayDrawer && (<div className="Notifications">
          <div>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length > 0 ? listNotifications.map(({ id, type, html, value }) => {
                return <NotificationItem key={id} type={type} html={html} value={value} />
              }) : (<NotificationItem value="No new notification for now" />)}

            </ul>
          </div>
          <button aria-label='Close' onClick={handleClick}>
            <img src={closeIcon} alt="close-icon.png" />
          </button>
        </div>)}
      </div>
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
}

export default Notifications;
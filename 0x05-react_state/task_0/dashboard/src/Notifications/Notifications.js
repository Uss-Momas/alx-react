import './Notifications.css';
import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed #E0354B',
    marginTop: '.58rem',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  ul: {
    margin: '1rem 2rem'
  },
  button: {
    ':hover': {
      cursor: 'pointer',
    },
    backgroundColor: 'white',
    border: '0',
  },
  img: {
    width: '15px',
    height: '15px',
  },
  menuItem: {
    marginTop: '.7rem',
    marginBottom: '2.4rem',
    marginRight: '1.5rem',
  },
  'my-notifications': {
    textAlign: "right",
  },

  '[data-notification-type="default"]': {
    color: "blue",
  },
  '[data-notification-type="urgent"]': {
    color: "red",
  },
});



class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.length > this.props.listNotifications.length || nextProps.displayDrawer !== this.props.displayDrawer);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const handleClick = (event) => {
      console.log("Close button has been clicked");
      console.log(this.props);

      this.props.handleHideDrawer();
    }
    return (
      <>
        <div className={css(styles.menuItem)}>
          <span className={css(styles['my-notifications'])} onClick={() => { this.props.handleDisplayDrawer() }}>Your notifications</span>
          {
            this.props.displayDrawer && (<div className={css(styles.Notifications)}>
              <div>
                <p>Here is the list of notifications</p>
                <ul className={css(styles.ul)}>
                  {
                    this.props.listNotifications.length > 0 ? this.props.listNotifications.map(({ id, type, html, value }) => {
                      return <NotificationItem key={id} type={type} html={html} value={value} markAsRead={this.markAsRead} id={id} />
                    }) : (<NotificationItem value="No new notification for now" />)
                  }
                </ul>
              </div>
              <button className={css(styles.button)} aria-label='Close' onClick={handleClick}>
                <img className={css(styles.img)} src={closeIcon} alt="close-icon.png" />
              </button>
            </div>)
          }
        </div>
      </>
    );
  }
}

// function Notifications({ displayDrawer = true, listNotifications = [] }) {
//   const handleClick = (event) => {
//     console.log("Close button has been clicked");
//   }
//   return (
//     <>
//       <div className="menuItem">
//         <span className='my-notifications'>Your notifications</span>
//         {displayDrawer && (<div className="Notifications">
//           <div>
//             <p>Here is the list of notifications</p>
//             <ul>
//               {
//                 listNotifications.length > 0 ? listNotifications.map(({ id, type, html, value }) => {
//                   return <NotificationItem key={id} type={type} html={html} value={value} />
//                 }) : (<NotificationItem value="No new notification for now" />)
//               }
//             </ul>
//           </div>
//           <button aria-label='Close' onClick={handleClick}>
//             <img src={closeIcon} alt="close-icon.png" />
//           </button>
//         </div>)}
//       </div>
//     </>
//   );
// }

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
  // handleDisplayDrawer: () => { return; },
  // handleHideDrawer: () => { return; },
}

export default Notifications;
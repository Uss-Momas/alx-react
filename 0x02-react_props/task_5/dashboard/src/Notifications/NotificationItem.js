import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', value, html }) {
    const element = html ?
        <li data-notification-type="urgent" dangerouslySetInnerHTML={html}></li> :
        <li data-notification-type={type} >{value}</li>;

    return element;
}

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
}

// NotificationItem.defaultProps = {
//     type: 'default'
// } //  will be removed in the future, use JS default parameters instead

export default NotificationItem;
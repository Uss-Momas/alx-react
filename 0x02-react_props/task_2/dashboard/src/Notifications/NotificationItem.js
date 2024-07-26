export default function NotificationItem(props) {
    const element = props.html ?
        <li data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: props.html }}></li> :
        <li data-notification-type={props.type} >{props.value}</li>;
    return element;
}
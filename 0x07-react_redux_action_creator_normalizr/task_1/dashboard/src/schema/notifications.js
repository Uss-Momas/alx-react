import notifications from '../../../../notifications.json';

export function getAllNotificationsByUser(userId) {
    const listUsersContext = notifications.filter((notification) => notification.author.id === userId).map((notification) => notification.context);
    
    return listUsersContext;
}

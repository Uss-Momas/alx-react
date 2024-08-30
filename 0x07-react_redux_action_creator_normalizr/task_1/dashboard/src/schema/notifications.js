import notifications from '../../../../notifications.json';
import { normalize, schema, } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
})
export const normalizedData = normalize(notifications, [notification]);

export function getAllNotificationsByUser(userId) {
    const listUsersContext = notifications.filter((notification) => notification.author.id === userId).map((notification) => notification.context);

    return listUsersContext;
}

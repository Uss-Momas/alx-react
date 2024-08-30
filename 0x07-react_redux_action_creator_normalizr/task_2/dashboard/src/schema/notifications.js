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
    const listUsersContext = [];
    const messages = normalizedData.entities.messages;
    const notifications = normalizedData.entities.notifications;
    for (const id in notifications) {
        if (notifications[id].author === userId) {
            const contextId = notifications[id].context
            listUsersContext.push(messages[contextId]);
        }
    }
    return listUsersContext;
}

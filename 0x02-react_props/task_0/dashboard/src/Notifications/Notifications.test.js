import { shallow } from "enzyme";
import Notifications from './Notifications';

const notifications = shallow(<Notifications />);

describe('<Notifications /> Component Test cases', () => {
    it('Verify if it renders without crashing', () => {
        expect(notifications).toBeDefined();
    });

    it('verify that Notifications renders three list items', () => {
        expect(notifications.find('li').length).toEqual(3);
    });

    it('verify that Notifications renders the text Here is the list of notifications', () => {
        expect(notifications.find('p').text()).toMatch('Here is the list of notifications');
    });
});
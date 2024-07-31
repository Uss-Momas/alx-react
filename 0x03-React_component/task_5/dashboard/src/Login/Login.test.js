import { shallow } from "enzyme";
import Login from './Login';

const login = shallow(<Login />);

describe('Login component tests', () => {
    it('Verify if Login component is rendered without crashing', () => {
        expect(login).toBeDefined();
    });

    it('Verify that the components renders 2 input tags', () => {
        expect(login.find('input').exists()).toEqual(true);
        expect(login.find('input').length).toEqual(2);
    });

    it('Verify that the components renders 2 label tags', () => {
        expect(login.find('label').exists()).toEqual(true);
        expect(login.find('label').length).toEqual(2);
    });
});
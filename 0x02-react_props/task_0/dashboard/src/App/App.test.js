import { shallow } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

describe('<App /> Component Test cases', () => {
    it('Renders app withou crashing', () => {
        expect(wrapper).toBeDefined();
    });

    it('Verify if exists <Notifications/> component', () => {
        expect(wrapper.find('Notifications').exists()).toEqual(true);
    });

    it('Verify if exists <Header/> component', () => {
        expect(wrapper.find('Header').exists()).toEqual(true);
    });

    it('Verify if exists <Login/> component', () => {
        expect(wrapper.find('Login').exists()).toEqual(true);
    });

    it('Verify if exists <Footer/> component', () => {
        expect(wrapper.find('Footer').exists()).toEqual(true);
    });
});
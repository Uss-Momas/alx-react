import { shallow } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

describe('<App /> Component Test cases', () => {
    it('Renders app withou crashing', () => {
        expect(wrapper).toBeDefined();
    });
    it('verify that App renders a div with the class App-header', () => {
        expect(wrapper.find('.App-header').exists()).toEqual(true);
        expect(wrapper.find('.App-header')).toBeDefined();
    });

    it('verify that App renders a div with the class App-body', () => {
        expect(wrapper.find('.App-body').exists()).toEqual(true);
    });

    it('verify that App renders a div with the class App-footer', () => {
        expect(wrapper.find('.App-footer').exists()).toEqual(true);
    });
});
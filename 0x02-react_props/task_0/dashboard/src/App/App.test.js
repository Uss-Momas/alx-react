import { shallow } from "enzyme";
import App from "./App";

const wrapper = shallow(<App />);

describe('<App /> Component Test cases', () => {
    it('Renders app withou crashing', () => {
        expect(wrapper).toBeDefined();
    });
});
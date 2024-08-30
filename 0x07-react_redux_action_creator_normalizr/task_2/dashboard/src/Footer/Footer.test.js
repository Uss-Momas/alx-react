import { shallow } from "enzyme";
import Footer from './Footer';

const footer = shallow(<Footer />);

describe('Footer component  Tests', () => {
    it('Verify if Footer component renders without crashing', () => {
        expect(footer).toBeDefined();
    });
    it('Verify if components render a text', () => {
        expect(footer.find('p').text()).toMatch(/(Copyright)/i);
    });
});
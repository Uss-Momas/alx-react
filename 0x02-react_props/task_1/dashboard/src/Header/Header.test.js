import { shallow } from "enzyme";
import Header from './Header';

const header = shallow(<Header />);

describe('Testing the Header component', () => {
    it('Verify if the Header renders without errors', () => {
        expect(header).toBeDefined();
    });

    it('Verify if renders the img tag', () => {
        expect(header.find('img').exists()).toEqual(true);
    });

    it('Verify if renders 1 img tag', () => {
        expect(header.find('img').length).toEqual(1);
    });

    it('Verify if renders the h1 tag', () => {
        expect(header.find('h1').exists()).toEqual(true);
    });

    it('Verify if renders 1 h1 tag', () => {
        expect(header.find('h1').length).toEqual(1);
    });
});
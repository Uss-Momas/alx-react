import { shallow } from "enzyme";
import CourseList from "./CourseList";


const courseListWrapper = shallow(<CourseList />);

describe('CourseList component tests', () => {
    it('Renders component without crashing', () => {
        expect(courseListWrapper).toBeDefined();
    });

    it('Checks that renders the 5 correct rows', () => {
        expect(courseListWrapper.find('CourseListRow').length).toEqual(5);
    });
});
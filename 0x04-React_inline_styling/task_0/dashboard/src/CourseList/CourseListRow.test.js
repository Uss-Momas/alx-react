import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

const courseListRow = shallow(<CourseListRow />);

describe('Course List Row Component Tests', () => {
    it('Verify if component is rendered correctly', () => {
        expect(courseListRow).toBeDefined();
    });

    it('When isHeader props is true and textSecondCell is null', () => {
        courseListRow.setProps({ isHeader: true, textFirstCell: "test" });
        expect(courseListRow.find('tr').length).toEqual(1);
        expect(courseListRow.find('tr').find('th').html()).toMatch('<th colSpan="2">test</th>');
    });

    it('Check When isHeader props is true and textSecondCell exists', () => {
        courseListRow.setProps({ isHeader: true, textFirstCell: "test", textSecondCell: "test2" });
        expect(courseListRow.find("tr").find("th").length).toEqual(2);
        expect(courseListRow.find("tr").html()).toMatch("<tr> <th>test</th> <th>test2</th></tr>");
    });

    it('Check when isHeader is false', () => {
        courseListRow.setProps({ isHeader: false, textFirstCell: "test", textSecondCell: "test2" });
        expect(courseListRow.find('tr').find('td').length).toEqual(2);
    });
});
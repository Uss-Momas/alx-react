import './CourseList.css';
import CourseListRow from './CourseListRow';

export default function CourseList() {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6" textSecondCell="60" and isHeader={false} />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" and isHeader={false} />
                <CourseListRow textFirstCell="React" textSecondCell="40" and isHeader={false} />
            </tbody>
        </table>
    );
}
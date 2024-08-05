import './CourseList.css';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

function CourseList({ listCourses = [] }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {
                    listCourses.length > 0 ? listCourses.map(({ id, name, credit }) => {
                        return <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} isHeader={false} />
                    }) : (
                        <CourseListRow textFirstCell="No course available yet" />
                    )
                }
            </tbody>
        </table>
    );
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(PropTypes.shape(CourseShape)),
}

export default CourseList;
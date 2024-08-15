import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    table: {
        margin: '0 auto',
        border: '1px solid #d4d4d4',
        width: '80%',
    },
    th: {
        borderBottom: '1.5px solid #cecece',
    },
    tr: {
        ':nth-child(2)': {
            textAlign: 'left'
        },
        padding: '1rem'
    },

});

function CourseList({ listCourses = [] }) {
    return (
        <table id="CourseList" className={css(styles.table)}>
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
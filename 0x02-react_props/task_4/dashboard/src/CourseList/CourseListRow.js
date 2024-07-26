export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    if (isHeader) {
        const elements = textSecondCell ? <tr> <th>{textFirstCell}</th> <th>{textSecondCell}</th></tr>
            : <tr> <th colSpan={2}>{textFirstCell}</th> </tr>;
        return (
            { elements }
        );
    }
    return (
        <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
    );
}
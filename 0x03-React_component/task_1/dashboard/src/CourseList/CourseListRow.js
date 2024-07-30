export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    if (isHeader) {
        if (textSecondCell) return (<tr> <th>{textFirstCell}</th> <th>{textSecondCell}</th></tr>);
        return (<tr> <th colSpan={2}>{textFirstCell}</th> </tr>);
    }
    return (
        <tr>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
    );
}
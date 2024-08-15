export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    const rowStyle = { backgroundColor: '#f5f5f5ab', };
    const headerRowStyle = { backgroundColor: '#deb5b545' };
    if (isHeader) {
        if (textSecondCell) return (<tr style={rowStyle}><th style={headerRowStyle}>{textFirstCell}</th><th style={headerRowStyle}>{textSecondCell}</th></tr>);
        return (<tr style={rowStyle}><th style={headerRowStyle} colSpan={2}>{textFirstCell}</th></tr>);
    }
    return (
        <tr style={rowStyle}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
        </tr>
    );
}
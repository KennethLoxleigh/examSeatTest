import "./Student.css";

export default function Student () {

  return (

    <>
    <div className="stuWrapper">
        <div className="stuHeadLeft">
            Students
        </div>
        <div className="stuHeadRight">
            <button className="stuAddBtn">
                Add Student
            </button>
        </div>
    </div>

    <table className="stuList">
        <thead className="stuHeader">
            <th>Roll Number</th>
            <th>Name</th>
            <th>Major ID</th>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    </>
  );
}
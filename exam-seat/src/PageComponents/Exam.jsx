import './Exam.css';

export default function Exam () {

  return (

    <>
    <div className="examWrapper">
        <div className="examHeadLeft">
            Exams
        </div>
        <div className="examHeadRight">
            <button className="examAddBtn">
                Add Exam
            </button>
        </div>
    </div>

    <div className="examListHead">
        <ul className="examHeader">
            <li>Date</li>
            <li>Subject</li>
        </ul>
    </div>
    </>
  );
}
import './Invigilator.css';

export default function Invigilator () {

  return (

    <>
    <div className="inviWrapper">
        <div className="inviHeadLeft">
            Invigilators
        </div>
        <div className="inviHeadRight">
            <button className="inviAddBtn">
                Add Invigilator
            </button>
        </div>
    </div>

    <div className="inviListHead">
        <ul className="inviHeader">
            <li>Name</li>
            <li>Rank</li>
            <li>Department</li>
        </ul>
    </div>
    </>
  );
}
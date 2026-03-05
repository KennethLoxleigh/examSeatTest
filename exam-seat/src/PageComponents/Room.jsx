import './Room.css';

export default function Room () {

  return (

    <>
    <div className="roomWrapper">
        <div className="roomHeadLeft">
            Rooms
        </div>
        <div className="roomHeadRight">
            <button className="roomAddBtn">
                Add Room
            </button>
        </div>
    </div>

    <div className="roomListHead">
        <ul className="roomHeader">
            <li>Name</li>
            <li>Floor</li>
            <li>Roll Capacity</li>
            <li>Column Capacity</li>
        </ul>
    </div>
    </>
  );
}
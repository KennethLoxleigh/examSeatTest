import "./Dashboard.css";

export default function Dashboard({ username }) {
  return (
    <div>
      <h1>This is Dashboard</h1>
      <p>Welcome, {username}</p>
    </div>
  );
}
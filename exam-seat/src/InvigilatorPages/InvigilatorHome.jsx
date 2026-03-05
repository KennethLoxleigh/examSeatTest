

export default function InvigilatorHome({ username, onLogout }) {
  return (
    <div style={{ padding: 30, color: "white", background: "#242424", minHeight: "100vh" }}>
      <h1>Invigilator Page</h1>
      <p>Logged in as: {username}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}
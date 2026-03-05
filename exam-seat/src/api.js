// src/api.js
const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export async function login(role, username, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ role, username, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Login failed");
  return data;
}
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "*" })); // later you can restrict it
app.use(express.json());

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

// test route
app.get("/api/health", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ ok: true, db: rows[0].ok });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

// example login route
app.post("/api/login", async (req, res) => {
  const { role, username, password } = req.body;
  try {
    // example table: users(role, username, password)
    const [rows] = await pool.query(
      "SELECT role, username FROM users WHERE role=? AND username=? AND password=? LIMIT 1",
      [role, username, password]
    );

    if (rows.length === 0) return res.status(401).json({ ok: false, message: "Invalid login" });
    res.json({ ok: true, user: rows[0] });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => console.log(`Backend running on ${PORT}`));
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ===== MySQL Connection ===== */

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Maiths@05",   // 👈 Put your MySQL password here (if any)
    database: "digizura"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("MySQL Connected Successfully");
});

/* ===== Contact API ===== */

app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;

    const sql = `
        INSERT INTO contact_messages (name, email, subject, message)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "Message saved successfully" });
    });
});

/* ===== Demo API ===== */
app.post("/api/demo", (req, res) => {
    const { name, email, company, product } = req.body;

    const sql = `
        INSERT INTO demo_requests (name, email, company, product)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql, [name, email, company, product], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "Demo request saved successfully" });
    });
});

/* ===== Server ===== */

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
const express = require('express');
const cors = require('cors');
const app = express();
const connectionPool = require('./db');


app.use(express.json());
app.use(cors());

// Create a route
app.post("/notices", async (req, res) => {
    try {
        const { notice_poster, notice_text, expiry_date, hostel_name } = req.body;
        const createNoticeResponse = await connectionPool.query(
            'INSERT INTO notice (notice_poster, notice_text, expiry_date, hostel_name) VALUES ($1, $2, $3, $4) RETURNING *',
            [notice_poster, notice_text, expiry_date, hostel_name]
        ); 
        res.json(createNoticeResponse.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

// Return all expired notices on a particular date
app.get("/notices", async (req, res) => {

    try {
        const expiry_date = req.query.expiry_date;
        const expiredNoticesResponse = await connectionPool.query(
            'SELECT * FROM notice WHERE expiry_date = $1',
            [expiry_date]
        );
        res.json(expiredNoticesResponse.rows);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(3002);
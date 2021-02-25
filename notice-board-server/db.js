const Pool = require("pg").Pool;

const connectionPool = new Pool({
    user: "postgres",
    password: "12345",
    host: "localhost",
    port: 5432,
    database: "notice_board"
});

module.exports = connectionPool;
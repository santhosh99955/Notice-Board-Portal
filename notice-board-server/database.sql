CREATE DATABASE notice_board;

CREATE TABLE notice(
    id SERIAL PRIMARY KEY,
    notice_poster VARCHAR(255),
    notice_text VARCHAR(255),
    expiry_date DATE,
    hostel_name VARCHAR(255)
);
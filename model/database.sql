CREATE DATABASE todo_db;

/* ----------------------------------- --\c into databse ----------------------------------- */

-- define a schema
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);


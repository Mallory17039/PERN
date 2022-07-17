DROP DATABASE IF EXISTS perntodo;

CREATE DATABASE perntodo;

\c perntodo;

CREATE TABLE IF NOT EXISTS todo(
    todo_id SERIAL PRIMARY KEY,
    desciption VARCHAR(250)
);

INSERT INTO todo(todo_id, description)
VALUES 
	(1, 'Wash the car'),
	(2, 'Water the flower'),
	(3, 'Pick up Mallory'),
	(4, 'Make a dinner'),
	(5, 'Make an appointment');

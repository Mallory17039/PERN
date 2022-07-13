CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    desciption VARCHAR(25)
);

INSERT INTO todo(todo_id, description)
VALUES 
	(1, 'Wash the car'),
	(2, 'Water the flower'),
	(3, 'Pick up Mallory'),
	(4, 'Make a dinner'),
	(5, 'Make an appointment');

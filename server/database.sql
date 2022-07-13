CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    desciption VARCHAR(250)
)

INSERT INTO todo(todo_id, description)
VALUES 
	(1, 'Wash the car'),
	(2, 'Water the flower'),
	(3, 'Pick up Mallory at the gym'),
	(4, 'Make a dinner'),
	(5, 'Make a doctor appointment');

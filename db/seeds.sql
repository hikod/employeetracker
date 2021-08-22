INSERT INTO department (name)
VALUES 
("Marketing"), 
("Human Resources"), 
("Sales"),
("Operations"), 
("Finance"),
("Technology");

INSERT INTO role (title, salary, department_id)
VALUES 
('Manager', 175000.00, 1),
('Vice President', 350000.00, 2),
('President', 2000000.00, 3),
('CIO', 280000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1 , 1), 
('Jane', 'Doe', 2, NULL),
('Steve', 'Jobs', 3, NULL),
('Ian', 'Sharp', 4, 2);
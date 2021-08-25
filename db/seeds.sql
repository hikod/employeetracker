INSERT INTO employee_db.department (name)
VALUES 
("Marketing"), 
("Human Resources"), 
("Sales"),
("Operations"), 
("Finance"),
("Technology");

INSERT INTO employee_db.role (title, salary, department_id)
VALUES 
('Marketing Manager', 175000.00, 1),
('HR', 350000.00, 2),
('Sales Manager', 380000.00, 3),
('President', 2000000.00, 4),
('Finance Manager', 280000.00, 5),
('Software Engineer', 180000.00, 6);

INSERT INTO employee_db.employee (first_name, last_name, role_id, manager_id)
VALUES 
('John', 'Doe', 1 , 1), 
('Jane', 'Bowe', 2, 4),
('Steve', 'Star', 3, 5),
('Ian', 'Sharp', 4, NULL);
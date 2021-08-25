DROP TABLE IF EXISTS employee_db.employee;
DROP TABLE IF EXISTS employee_db.role;
DROP TABLE IF EXISTS employee_db.department;

CREATE TABLE employee_db.department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);
CREATE TABLE employee_db.role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER NOT NULL,
  FOREIGN KEY(department_id) 
  REFERENCES department(id)
);

CREATE TABLE employee_db.employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    FOREIGN KEY (role_id) 
    REFERENCES role(id)
);
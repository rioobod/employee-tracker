INSERT INTO department (dept_name)
VALUES 
('Sales'),
('Finance'),
('Legal'),
('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES
('Sales Person', 68000.99, 1),
('Sales Representative', 55790.50, 1),
('Sales Manager', 75944.99, 1),
('Lead Engineer', 98555.85, 4),
('Software Engineer', 76888.89, 4),
('Account Manager', 62768.55, 2),
('Accountant', 75000.89, 2),
('Legal Team Lead', 75689.99, 3),
('Lawyer', 88559.75, 3),
('Legal Manager', 88000.95, 3),
('UI/UX', 56000.55, 4),
('Full Stack Developer', 100500.55, 4),
('Project Manager', 120750.99, 4);

INSERT INTO employee (first_name, last_name, role_id)
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1),
  ('Virginia', 'Woolf', 2),
  ('Piers', 'Gaveston', 3),
  ('Charles', 'LeRoi', 4),
  ('Katherine', 'Mansfield', 5),
  ('Dora', 'Carrington', 6),
  ('Edward', 'Bellamy', 7),
  ('Montague', 'Summers', 8),
  ('Octavia', 'Butler', 9),
  ('Unica', 'Zurn', 10),
  ('Mike', 'Chan', 11),
  ('Ashley', 'Rodriguez', 12),
  ('Kevin', 'Tupik', 13),
  ('Kunal', 'Singh', 12),
  ('Malia', 'Brown', 3),
  ('Sarah', 'Lourd', 9),
  ('Tom', 'Allen', 11),
  ('John', 'LaRusso', 1),
  ('Cynthia', 'McAndrews', 6),
  ('Jonathan', 'Simmons', 11),
  ('Vince', 'Yang', 12),
  ('Daniel', 'Arturio', 5),
  ('Ibrahim', 'Missoni', 12),
  ('Jeremy', 'Pavelli', 5),
  ('Rebecca', 'Bijon', 11);

UPDATE employee
SET manager_id = 4
WHERE role_id = 13;

UPDATE employee
SET manager_id = 4
WHERE role_id = 12;

UPDATE employee
SET manager_id = 4
WHERE role_id = 11;

UPDATE employee
SET manager_id = 4
WHERE role_id = 5;
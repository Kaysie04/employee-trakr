
SET FOREIGN_KEY_CHECKS=0;

INSERT INTO department
  (department_name)
VALUES
('Administration'),
('Marketing'),
('Sales'),
('Shipping'),
('Retail');

INSERT INTO role 
(title, salary, department_id)
VALUES 
('HR Rep', '500000.00', 1),
('Social Media Rep', '400000.00', 2),
('Sales Rep', '300000.00', 3),
('Shipping Manager', '200000.00', 4),
('Cashier', '100000.00', 5);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Kaysie', 'Anderson', 1, 1),
('Temple', 'Kramer', 2, 3),
('Caitlin', 'Parsons', 3, 2),
('Josie', 'Sparling', 4, NULL),
('Todd', 'Holley', 5, 1);


const inquirer = require('inquirer')
const cTable = require('console.table')
const mysql = require('mysql')
// const db = require('./db')
// const connection = require('./db/connection')
 

const connection = mysql.createConnection(
    {
        host: '192.168.1.6',
        // your MySQL username,
        user: 'root',
        // your MySQL password
        password: 'Milo04022021!',
        database: 'company'
    }
)

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('connected to mysql server')
})

// Create an array of questions for user input
const userPrompt = () => {
    return inquirer
    .prompt([
        {   
            type: "list",
            name: "selection",
            message: "Please select one of the following",
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee Role'
            ]
        },

        // add department
        {
            type: "input",
            name: "addDept",
            message: "What is the name of the department?"
        },

        // add role
        {
            type: "input",
            name: "addRole",
            message: "What is the name of the role?"
        },

        {
            type: "input",
            name: "addRoleSalary",
            message: "What is the salary of the role?"
        },

        {
            type: "input",
            name: "addRoleDept",
            message: "Which department does the role belong to?"
        },
        
        // add employee
        {
            type: "input",
            name: "addEmployeeFirstName",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "addEmployeeLastName",
            message: "What is the employees's last name?"
        },
        {
            type: "input",
            name: "addEmployeeRole",
            message: "What is the employees's role?"
        },

        {
            type: "list",
            name: "addEmployeeRole",
            message: "Who is the employees manager?",
            choices: [
                "Kaysie Anderson",
                "Temple Kramer",
                "Josie Sparling",
                "Caitlin Parsons",
                "Todd Holley"
            ]
        },

        // Update current employee

        {
            type: "list",
            name: "updateEmployee",
            message: "Which employee's role do you want to update?",
            choices: [
                "Kaysie Anderson",
                "Temple Kramer",
                "Josie Sparling",
                "Caitlin Parsons",
                "Todd Holley"
            ]
        },

        {
            type: "list",
            name: "updateEmployeeRole",
            message: "Which role do you want to assign the selected employee?",
            choices: [
               "HR Rep",
               "Social Media Rep",
               "Sales Rep",
               "Shipping Manager",
               "Cashier"
            ]
        }
    ])

    .then ((answers) => {
        let order = res.selection;
        switch(order) {
            case 'View All Departments':
                viewDepts()
                break;
            case 'View All Roles':
                viewRoles()
                break;
            case 'View All Employees':
                viewEmployees()
                    break;
            case 'Add a Department':
                addDept()
                break;
            case 'Add a Role':
                addRole()
                 break;
            case 'Add an Employee':
                addEmployee()
                break;
            case 'Update an Employee Role':
                updateRole()
                break;

            default:
            process.exit();
        }
    })
 }


 // view all departments
 viewDepts = () => {
    const sql = 
    `SELECT id, department_name AS department 
    FROM department;
    `
 }

// view all roles
viewRoles = () => {
    `const sql = SELECT role.id, title, salary, department_name AS department
    FROM role
    INNER JOIN department ON role.department_id = department.id;

    //
    `
} 

// view all employees 
viewEmployees = () => {
   `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, 
   department.department_name AS department, manager.first_name AS manager
   FROM employee
   LEFT JOIN role ON employee.role_id = role.id
   LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id` 
}


// add new dept
addDept = () => {
    `INSERT INTO department
    (department_name)
    VALUES (?);`
}

// add new role 
addRole = () => {
    `INSERT INTO role 
    (title, salary, department_id)
    VALUES (?);`
}

addEmployee = () => {
   ` INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
    VALUES (?);`
}

updateRole = () => {
    `UPDATE role
    SET 
    WHERE`
}







 userPrompt()


 
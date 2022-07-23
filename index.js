const inquirer = require('inquirer')
const cTable = require('console.table')
const db = require('/db')
const connection = require('connection.js')

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
            name: "addDepartment",
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
            name: "addRoleDepartment",
            message: "Which department does the role belong to?"
        },
        
        // add employee
        {
            type: "input",
            name: "addEmployeeNameFirstName",
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

    .then ((res) => {
        let order = res.selection;
        switch(order) {
            case 'View All Departments':
                viewDeps()
                break;
            case 'View All Roles':
                viewRoles()
                break;
            case 'View All Employees':
                viewEmployess()
                    break;
            case 'Add a Department':
                addDepartment()
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

 function viewDeps () {
    db.
 }




 userPrompt()


 
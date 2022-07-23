const mysql = require('mysql2')

// Connect to database
const connection = mysql.createConnection(
    {
        host: '192.168.1.6',
        // your MySQL username,
        user: 'root',
        // your MySQL password
        password: 'Milo04022021!',
        database: 'company'
    },
    console.log('Connected to the company database.')
)

module.exports = connection;
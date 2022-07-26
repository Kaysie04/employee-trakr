const mysql = require('mysql')

const connection = mysql.createConnection(
    {
        host: '192.168.1.6',
        // your MySQL username,
        user: 'root',
        // your MySQL password
        password: 'milonaries',
        database: 'company',
        socketPath: '/tmp/mysql.sock'
    }
)

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('connected to mysql server')
})
module.exports = connection;
const mysql = require('mysql')
const configDB = require('../database/configDB');

const connection = mysql.createConnection({
    host: configDB.HOST,
    user: configDB.USER,
    password: configDB.PASSWORD,
    database: configDB.DATABASE,
})

connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('connect database successfully')
});

module.exports = connection;
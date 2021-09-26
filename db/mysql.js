var mysql = require('mysql');
const { connect } = require('../routes/commonRoutes');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_project'
});

module.exports = {
    db: connection
}
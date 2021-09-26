// const dbConnection = require('../db/mysql');

const insertData = (record) => {
    console.log('Insert called');
    console.log(record);
    // console.log(dbConnection.db);

}

module.exports = {
    insertData
}


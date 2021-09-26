require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// accessing ejs template engine
app.set('view engine', 'ejs');
// console.log('app');
// console.log(bodyParser);
// serve static folder from static file
app.use('/static', express.static('assets'));

const commonRouters = require('./routes/commonRoutes');
const categoryRouters = require('./routes/categoryRoutes');

// code to use body-parser to request data 
/* This object will contain key-value pairs, where the value can be a string or array (when extended is false),
or any type (when extended is true).*/
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', commonRouters);
app.use('/category', categoryRouters);


app.listen(process.env.PORT, process.env.HOST, () => {
    console.log('Server stated at port 4000!')
})
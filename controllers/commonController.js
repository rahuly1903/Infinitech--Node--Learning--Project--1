const email_validator = require("../middlewares/validator_project");
const userModal = require('../models/userModal.mysql');

const landHomePage = (req, res) => {
    res.render('homepage')
}

const landLoginPage = (req, res) => {
    res.render('loginpage')
}

const logicAction = (req, res) => {
    // res.send(req.body);
    let msg = '';
    // console.log(req.body);
    // email_validator.email(req.body.email);
    if (email_validator.email(req.body.email)) {
        msg = 'Enter valid email id';
    } else if (email_validator.password(req.body.password)) {
        msg = 'enter valid password';
    } else {
        msg = 'check with DB for auth';
    }
    res.send({ msg });
}

const registerAction = (req, res) => {
    let regsiterMsg = ''
    if (email_validator.username(req.body.Name)) {
        regsiterMsg = "Enter valid username";
    } else if (email_validator.email(req.body.email)) {
        regsiterMsg = "Enter valid Email-ID";
    } else if (email_validator.mobile(req.body.Mobile)) {
        regsiterMsg = "Enter valid Mobile number";
    } else if (email_validator.password(req.body.password)) {
        regsiterMsg = "Enter valid password number";
    } else if (req.body.password != req.body.cpassword) {
        regsiterMsg = "Match confirm password with password";
    } else {
        regsiterMsg = "Do register process";
        userModal.insertData({
            userName: req.body.Name,
            userEmail: req.body.email,
            userMobile: req.body.Mobile,
            userPassword: req.body.password
        });
    }
    res.send({ regsiterMsg });
}


const landProfilePage = (req, res) => {
    res.render('profilepage');
}

const profileAction = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.send({ 'send': "action called" })
}

module.exports = {
    landHomePage,
    landLoginPage,
    logicAction,
    registerAction,
    landProfilePage,
    profileAction
}
const express = require('express');
const router = express.Router();

// package to upload file medium through form
const multer = require('multer');
// const upload = multer({ dest: 'assets/uploads/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })



const commonController = require('../controllers/commonController');


router.get('/', commonController.landHomePage)

router.get('/login', commonController.landLoginPage);

router.post('/login', commonController.logicAction);

router.post('/register', commonController.registerAction);

router.get('/profile', commonController.landProfilePage);

router.post('/profile', upload.array('profileImage', 12), commonController.profileAction);

module.exports = router;
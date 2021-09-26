const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Show category');
});

router.post('/', (req, res) => {
    res.send('add category')
});

router.delete('/', (req, res) => {
    res.send('delete category')
});

router.put('/', (req, res) => {
    res.send('update category')
});

module.exports = router;
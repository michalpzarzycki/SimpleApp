const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('form', {title: "Register"})
})
router.post('/', (req, res) => {
    res.render('form', {title: "Register"})
})

module.exports = router
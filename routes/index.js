const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('form', {title: "Register"})
})
router.post('/',
    [
        body('name')
            .isLength({ min: 1})
            .withMessage("Enter a name"),
        body('email')
            .isLength({ min: 1})
            .withMessage("Enter an email")
    ],
     (req, res) => {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        res.send("Registration success")
    } else {
        res.render("form", {
            title: "registration form",
            errors: errors.array(),
            data: req.body
        })
    }
    console.log(req.body)
    res.render('form', {title: "Register"})
})

module.exports = router
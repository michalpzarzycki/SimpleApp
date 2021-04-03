const express = require('express');
const path = require("path");
const auth = require("http-auth")
const mongoose = require('mongoose')
const { body, validationResult } = require('express-validator');

const basic = auth.basic({
    file: path.join(__dirname, '../users.htpasswd')
})

const router = express.Router();
const Registration = mongoose.model('Registration')
router.get('/', (req, res) => {
    res.render('form', {title: "Register"})
})
router.get('/registrations', (req, res) => {
    Registration.find().then(registrations => {
        res.render('index', {title:"registrations list", registrations})

    }).catch(err => {
        res.send("Sorry sth went wrong")
    })
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
        const registration = new Registration(req.body)
        registration.save()
        .then(()=>{
            res.send("Registration success :)")

        })
        .catch(() => {
            res.send("Registration Failed :(")

        })
    } else {
        res.render("form", {
            title: "registration form",
            errors: errors.array(),
            data: req.body
        })
    }
})

module.exports = router
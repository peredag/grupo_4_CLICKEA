const express = require('express')
const router = express.Router();

router.get('/register', function(req, res) {res.sendFile(path.join(__dirname, "views/register.ejs"))})

router.get('/login', function(req, res) {res.sendFile(path.join(__dirname, "views/login.ejs"))})

module.exports = router;
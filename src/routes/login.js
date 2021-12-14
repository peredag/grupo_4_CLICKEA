const express = require('express')
const router = express.Router();
const controller = require("../controllers/loginController")

router.get("/login", controller.index);
/* router.get('/register', function(req, res) {res.sendFile(path.join(__dirname, "views/register.ejs"))})

router.get('/login', function(req, res) {res.sendFile(path.join(__dirname, "views/login.ejs"))}) */

module.exports = router;
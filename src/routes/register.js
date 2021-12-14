const express = require('express');
const router = express.Router();
const controller = require("../controllers/registerController")

router.get("/register", controller.index);

module.exports = router;
const express = require('express')
const router = express.Router();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "views/home.ejs"));
  });


module.exports = router;
let expres = require('express');
let router = express.Router();


router.get("/productDetail", function (req, res) {
    res.sendFile(path.join(__dirname, "/productDetail.ejs"));
  });

  
router.get("/productCart", function (req, res) {
    res.sendFile(path.join(__dirname, "/productCart.ejs"));
  });

module.exports = router;
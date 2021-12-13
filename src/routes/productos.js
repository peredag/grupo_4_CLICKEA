let expres = require('express')

let router = express.Router();


router.get("/productDetail", function (req, res) {
    res.sendFile(path.join(__dirname, "views/productDetail.html"));
  });

  
router.get("/productCart", function (req, res) {
    res.sendFile(path.join(__dirname, "views/productCart.html"));
  });

module.exports = router;
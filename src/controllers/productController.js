let productController = {
    cart:function (req, res) {
        res.render("productCart.ejs");
      },
    detail:function (req, res) {
        res.render("productDetail");
      }
}

module.exports = productController;
let userController = {
    home:function (req, res) {
        res.render("home");
      },
    login:function (req, res) {
        res.render("login");
      },
    register:function (req, res) {
        res.render("register");
      }
}
module.exports = userController;
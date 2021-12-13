const { response } = require("express");
let express = require("express");
let app = express();
const PORT = 3000;
let path = require("path");

let rutasProductos = require('./routes/productos.js');

app.use('/productos', rutasProductos);




app.use(express.static(path.join(__dirname, "../public")));



app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "views/register.ejs"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "views/login.ejs"));
});

app.listen(PORT, () =>
  console.log(
    `Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`
  )
);

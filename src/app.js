const { response } = require("express");
let express = require("express");
const app = express();
const PORT = 3000;
let path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let productCart = require('./routes/productCart');
let home = require('./routes/main');
let login = require("./routes/login");
let register = require("./routes/register");
let productDetail = require("./routes/productDetail");



app.use('/productCart', productCart);
app.use('/', home);
app.use('/login', login);
app.use('/register', register);
app.use('/productDetail', productDetail);




app.listen(PORT, () =>
  console.log(
    `Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`
  )
);

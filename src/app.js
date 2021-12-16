const { response } = require("express");
let express = require("express");
const app = express();
const PORT = 3000;
let path = require("path");

app.use(express.static(path.join(__dirname, "../public")));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let home = require('./routes/users');
let login = require("./routes/users");
let register = require("./routes/users");
let productDetail = require("./routes/products");
let productCart = require('./routes/products');



app.use('/', home);
app.use('/login', login);
app.use('/register', register);
app.use('/productDetail', productDetail);
app.use('/productCart', productCart);



app.listen(PORT, () =>
  console.log(
    `Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`
  )
);

const { response } = require('express');
let express = require('express')
let app = express();
const PORT = 3000;
let path = require('path')

app.use(express.static(path.join(__dirname, '../public')));

app.set("view engine", "ejs") //setea el templat engine
app.set('views', path.join(__dirname, 'views'))//indica la ubicación


app.get('/', function(req, res) {res.sendFile(path.join(__dirname, "views/home.html"))})

app.get('/productDetail', function(req, res) {res.sendFile(path.join(__dirname, "views/productDetail.html"))})

app.get('/productCart' , function(req, res) {res.sendFile(path.join(__dirname, "views/productCart.html"))})






app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))
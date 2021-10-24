const { response } = require('express');
let express = require('express')
let app = express();
const PORT = 3030;
let path = require('path')

app.use(express.static("public"));


app.get('/', function(req, res) {res.sendFile(path.join(__dirname, "views/index.html"))})

app.get('/productDetail', function(req, res) {res.sendFile(path.join(__dirname, "views/productDetail.html"))})

app.get('/productCart' , function(req, res) {res.sendFile(path.join(__dirname, "views/productCart.html"))})

app.get('/register', function(req, res) {res.sendFile(path.join(__dirname, "views/register.html"))})

app.get('/login', function(req, res) {res.sendFile(path.join(__dirname, "views/login.html"))})




app.listen(PORT, () => console.log(`servidor levantado en el puerto ${PORT} http://localhost:${PORT}`))
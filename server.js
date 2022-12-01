const express = require('express')
const app = express()
const morgan = require('morgan')

//Midlewares
app.use(morgan('dev'));
app.use(express.json());

//conexión a mongodb
const archivoBD = require('./conexion')

//importar rutas
const rutaproduct = require('./rutas/ProductsData')

//importar boy parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/product', rutaproduct)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend node')
})

app.listen(5000,function(){
    console.log('el servidor NODE esta corriendo correctamente')
})

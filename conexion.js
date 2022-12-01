const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ProductsData')
    .then(db => console.log("db esta conectada"))
    .catch(err => console.log(err));

const objectbd = mongoose.connection


objectbd.on('connected', ()=>{console.log('conexión correcta a MongoDB')})
objectbd.on('error', ()=>{console.log('conexión errada a MongoDB')})

module.exports = mongoose
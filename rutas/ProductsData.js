const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaproduct = new eschema ({
    id: { type:String, required: true},
    names: { type:String, required: true},
    productType: { type:String, required: true},
    price: { type:Number, required: true},
    amount: { type:Number, required: true},
    img: { type:String, required: true},
    description: { type:String, required: true},
})

const ModeloProduct = mongoose.model('product', eschemaproduct)
module.exports = router

router.post('/api/product/agregarproduct', (req, res) =>{
    const nuevoproduct = new ModeloProduct({
        id: req.body.id,
        names: req.body.names,
        productType: req.body.productType,
        price: req.body.price,
        amount: req.body.amount,
        img: req.body.img,
        description: req.body.description
    })
    nuevoproduct.save(function(err){
        if(!err){
            res.send('usuario agregado correctamente')
        }else{
            res.send(err)
        }
    })
})
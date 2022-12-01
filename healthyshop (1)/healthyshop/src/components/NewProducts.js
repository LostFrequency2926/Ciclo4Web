import * as React from 'react';
import { useState } from 'react';
import uniquid from 'uniqid';
import axios from 'axios';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';



//Formulario
import TextField from '@mui/material/TextField';


const useStyles = makeStyles(({ theme }) => ({
    centered: {
        alignItems: 'center',
        textAlign: 'center'
    }
}))

export default function IngresarProductos() {

    //Hooks
    const[names, setNames]=useState('')
    const[productType, setProductType]=useState('')
    const[price, setPrice]=useState('')
    const[amount, setAmount]=useState('')
    const[img, setImg]=useState('')
    const[description, setDescription]=useState('')

    function ingresarProducto(){
        var product = {
            id:uniquid(),
            names: names,
            productType: productType,
            price: price,
            amount: amount,
            img: img,
            description: description,
        }
        console.log(product)

        axios.post('/api/product/agregarproduct',product)
        .then(res =>{
            alert(res.data)
        })
        .then(err => {console.log(err)})
    }

    const classes = useStyles();

    return (

        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            alignContent='center'
            className={classes.centered}
            marginBottom={"2rem"}
        >
            <div xs={12} >
                <Typography
                    variant='h5'
                    color='textSecondary'
                    marginTop={"2rem"}
                    marginBottom={"2rem"}>
                    Formulario para ingreso de nuevos productos
                </Typography>
            </div>

            <div >
                <TextField
                    id="names"
                    label="Nombre Producto"
                    value={names}
                    onChange={(e) => {setNames(e.target.value)}}
                />
            </div>
            <div >
                <TextField
                    id="productType"
                    label="Categoria Producto"
                    value={productType}
                    onChange={(e) => {setProductType(e.target.value)}}
                />
            </div>
            <div>
                <TextField
                    id="price"
                    label="Precio Producto"
                    value={price}
                    onChange={(e) => {setPrice(e.target.value)}}
                />
            </div>
            <div >
                <TextField
                    id="amount"
                    label="Cantidad de Unidades"
                    value={amount}
                    onChange={(e) => {setAmount(e.target.value)}}
                />
            </div>
            <div>
                <TextField
                    id="img"
                    label="Direccion Imagen"
                    value={img}
                    onChange={(e) => {setImg(e.target.value)}}
                />
            </div>
            <div >
                <TextField
                    id="description"
                    label="Descripción del producto"
                    value={description}
                    onChange={(e) => {setDescription(e.target.value)}}
                    multiline
                    maxRows={6}
                />
            </div>
            <div>
                <Button centered margin={"2px"} variant="outlined" startIcon={<DeleteIcon />}>
                    Cancelar
                </Button>
                <Button  onClick={ingresarProducto} centered variant="contained" endIcon={<SendIcon />}>
                    Registrar
                </Button>
            </div>
        </Box>
    );
}
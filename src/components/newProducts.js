import * as React from 'react';
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
                    id="name"
                    label="Nombre Producto"
                />
            </div>
            <div >
                <TextField
                    id="productType"
                    label="Categoria Producto"
                />
            </div>
            <div>
                <TextField
                    id="price"
                    label="Precio Producto"
                />
            </div>
            <div >
                <TextField
                    id="amount"
                    label="Cantidad de Unidades"
                />
            </div>
            <div>
                <TextField
                    id="img"
                    label="Direccion Imagen"
                />
            </div>
            <div >
                <TextField
                    id="description"
                    label="Descripción del producto"
                    multiline
                    maxRows={6}
                />
            </div>
            <div>
                <Button centered margin={"2px"} variant="outlined" startIcon={<DeleteIcon />}>
                    Cancelar
                </Button>
                <Button  onClick={console.log("Articulo Ingresado")} centered variant="contained" endIcon={<SendIcon />}>
                    Registrar
                </Button>
            </div>
        </Box>
    );
}
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/favicon.ico'
import { ShoppingCart } from '@material-ui/icons';
import { Badge} from '@material-ui/core';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

//Consumir el state value general
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles(({ theme }) => ({
     grow: {
         color: "#FFFFFF",
     }
 }))


export default function NavBar() {

    const classes = useStyles();
    const [{basket}] = useStateValue();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="statics">
                <Toolbar>
                    <Link to="/">
                        <IconButton>
                            <img height={"60rem"} src={logo} alt="icon" />
                        </IconButton>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Healthy Shop
                    </Typography>
                    <Typography marginRight="3rem" color="inherit" variant="h6" component="p">
                        Hola visitante¡¡
                    </Typography>
                    <Link to='products' className={classes.grow}>
                        <Button color="inherit">Productos</Button>
                    </Link>
                    <Link to='movements' className={classes.grow}>
                        <Button color="inherit">Movimientos</Button>
                    </Link>
                    <Link to='newproducts' className={classes.grow}>
                        <Button color="inherit">Agregar</Button>
                    </Link>                    
                    <Button color="inherit">
                        <strong>Login</strong>
                    </Button>
                    <Link to="checkout-page">
                        <IconButton aeria-label="ver carrito" className={classes.grow}>
                            <Badge badgeContent={basket?.length} color="secondary">
                                <ShoppingCart fontSize='large' className={classes.grow} />
                            </Badge>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

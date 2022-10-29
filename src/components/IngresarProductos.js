import React, { useState } from 'react'
import Formularioproductos from './Formularioproductos';
import TabladeProductos from './TabladeProductos';
import Box from '@mui/material/Box';
import ProductsData from '../dataProducts/ProductsData';


const IngresarProductos = () => {
    const [productsData, setDb] = useState(ProductsData);

    return (
        <div>
            <Formularioproductos/>
            <TabladeProductos productsData/>
        </div>
    );
}

export default IngresarProductos;
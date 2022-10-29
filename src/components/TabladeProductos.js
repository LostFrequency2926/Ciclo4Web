import React from 'react'
import ProductsData from '../dataProducts/ProductsData';
import { FilaTablaProductos } from './FilaTablaProductos';


export const TabladeProductos = () => {
  return (
    <div>
        <h3>Tabla de datos</h3>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Categoria</th>
                    <th>Descripción</th>
                    <th>imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Precio</td>
                    <td>Cantidad</td>
                    <td>Categoria</td>
                    <td>Caracteristica</td>
                    <td>imagen</td>
                    <td>
                        <button>Editar</button>
                        <button>Eliminar</button>
                    </td>

                </tr>
                <tr>
                    {ProductsData.map(d=>(
                        <FilaTablaProductos
                        key={d.name}
                        id={d.id}
                        nombre={d.name}
                        precio={d.price}
                        cantidad={d.amount}
                        categoria={d.productType}
                        descripcion={d.description}
                        imagen={d.img}
                    />))}
                </tr>
                
            </tbody>
        </table>
       
    </div>
  );
}
export default TabladeProductos

import React from 'react'


export const FilaTablaProductos = ({name, productType, price, amount, description,img}) => {
  return (
    <div>
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{amount}</td>
            <td>{productType}</td>
            <td>{description}</td>
            <td>{img}</td>
            <td>
                <button>Editar</button>
                <button>Eliminar</button>
            </td>
        </tr>
    </div>
  )
}

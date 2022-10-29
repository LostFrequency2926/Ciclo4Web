import React,{useState, useEffect} from 'react';

const datosIniciales ={
    id: "",
    name: "",
    price: 0,
    amount: 0,
    productType: "",
    description: "",
    img: "",
}

const Formularioproductos = () => {
    const[form, setForm] = useState(datosIniciales) 

    const handleChange = (e) => {}
    const handleSubmit =(e) => {}
    const handleReset =(e) => {}
    
    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="id" placeholder='ID' onChange={handleChange} value={form.id}/>
                <input type="text" name="name" placeholder='Nombre' onChange={handleChange} value={form.name}/>
                <input type="text" name="price" placeholder='Precio' onChange={handleChange} value={form.price}/>
                <input type="text" name="amount" placeholder='Cantidad'onChange={handleChange} value={form.amount}/>
                <input type="text" name="productType" placeholder='Categoria'onChange={handleChange} value={form.productType}/>
                <input type="text" name="description" placeholder='Caracteristica'onChange={handleChange} value={form.description}/>
                <input type="text" name="img" placeholder='Referencia'onChange={handleChange} value={form.img}/>
                <input type="submit" value="Enviar"/>
                <input type="reset" value="Limpiar" onClick={handleReset}/>
            </form>
        </div>
        
    );
}

export default Formularioproductos;
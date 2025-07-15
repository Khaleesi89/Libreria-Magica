import React, { useState } from 'react'
import useProducts from '../hooks/useProducts.js'

const hocFilterProducts = (Component) => {
  return function () {
    //es lo que escribe el usuario
    const [query, setQuery] = useState("");
    const {products, setProducts} = useProducts();// Desestructuramos el objeto devuelto por useProducts()

    const changeInput = (event) => {
        setQuery(event.target.value.toLowerCase());//cada vez que cambie, me dara el valor
        //guarda con minusculas

    };


    //funcion de busqueda
    const search = (productsList) => {
        const filterProducts = productsList.filter((product) => {
            //busca por name
            return product.name.toLowerCase().includes(query);
        }) 
        return filterProducts;
        }
        //Se pone Component como generico porque esto debe funcionar para cualquier componente que enviemos a
        //la funcion
        return(
            <>
                <div>
                    <input type="text" placeholder= "Buscar Productos..." onChange={changeInput} />
                </div>
                <Component products={search(products)}/>
            </>
        )
    }
}

export default hocFilterProducts;
import { useState, useEffect } from 'react'
import { getProducts } from '../data/products.js'

const useProducts = () => {
    //variable de estado
      const[products, setProducts] = useState([])
      const[loading, setLoading] = useState(true)

    
    
      //obtener los productos
      useEffect(()=> {
        getProducts()
            .then((data)=>{
            setProducts(data);
            })
            .finally(() => {

                setLoading(false);
            })
    
      },[])
  
  
    return {products, loading}
}

export default useProducts;





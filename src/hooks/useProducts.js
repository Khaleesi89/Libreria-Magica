import { useState, useEffect } from 'react'
import { getProducts } from '../data/products.js'

const useProducts = (category) => {
    //variable de estado
      const[products, setProducts] = useState([])
      const[loading, setLoading] = useState(true)

    
      console.log(category)
    
      //obtener los productos
      useEffect(()=> {
        setLoading(true);
        getProducts()
            .then((data)=>{
              if(category){
                //filtrar por esa categoria
                const productsFilter = data.filter((product)=>product.category === category);
                console.log(productsFilter)
                setProducts(productsFilter);
              }else{
                //guardamos toda la info
                console.log("no filtre nada por filtrar")

                setProducts(data);

              }
            })
            .finally(() => {

                setLoading(false);
            })
    
      },[category])
  
  
    return {products, loading}
}

export default useProducts;





import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../db/db.js";


const useProduct = (productId) =>{
    //variables
    const [product, setProduct] = useState({});//cuando se guarda un objeto, se pone en {}
    const [loading, setLoading] = useState(true);


    //buscar un producto en particular
    const getProduct = async()=>{
        try {
            const docRef = doc(db, "products", productId)
            const dataDb = await getDoc(docRef)
            const data = {id:dataDb.id, ...dataDb.data()}
            setProduct(data)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProduct()
    },[])

    
    return {product, loading};
}

export default useProduct;


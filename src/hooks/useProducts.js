// Código corregido y limpio
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../db/db.js';

const useProducts = (category) => {
    //variables
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    //trae los productos y si está seteada la variable category, realiza búsqueda filtrada por category
    useEffect(() => {
        setLoading(true);

        const getProductsData = async () => { // Función asíncrona
            try {
                let productsRef = collection(db, "products");
                let q;

                if (category) {
                    q = query(productsRef, where("category", "==", category));
                } else {
                    q = productsRef;
                }

                const dataDb = await getDocs(q); // Aquí esperamos la respuesta
                const data = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() };
                });

                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
                setLoading(false);
            }
        };

        getProductsData();

    }, [category]);

    return { products, loading };
};

export default useProducts;
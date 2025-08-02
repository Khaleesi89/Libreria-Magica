import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './ItemCount.css'

const ItemCount = ({ stock, addProduct }) => {

    const [count, setCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    // Función para manejar el clic en "Añadir al carrito"
    const handleAddProduct = () => {
        addProduct(count);
        setIsAdded(true);
    };

    return (
        <div className="buttons">
            {isAdded ? (
                // Si el producto ya fue añadido, muestra este bloque
                <Link to="/cart" className="cartGo">
                    Ir al carrito
                </Link>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={handleClickDecrement}>-</button>
                    <p>{count}</p>
                    <button onClick={handleClickIncrement}>+</button>
                    {/* Llama a la nueva función handleAddProduct */}
                    <button onClick={handleAddProduct}>Añadir al carrito</button>
                </div>
            )}
        </div>
    );
};

export default ItemCount;
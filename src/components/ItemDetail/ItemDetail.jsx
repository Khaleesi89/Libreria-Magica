import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

//abreviatura rcc
//product = {} se pone par que no de errores por si no manda nada
const ItemDetail = ({product = {}}) => {

  //variables
  const {addProductInCart} = useContext(CartContext)


  //agregar productos al carrito
  const AddProduct = (quantity) =>{
    const productCart = {...product, quantity}//es para agregar un campo mas
    //añadir ese producto al carrito pero ya tenemos toda la info
    addProductInCart(productCart)
    

  }


  return (
    <div className="product-card">
        <div className="product-image">
            <img src={product.image} alt="product"/>
        </div>
        <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
        </div>
        <ItemCount stock={product.stock} addProduct={AddProduct}/>
    </div>


  )
}

export default ItemDetail
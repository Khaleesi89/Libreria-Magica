import './CartWidget.css'
import carrito from '../../assets/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

const CartWidget = () => {

  //solo utilizamos la funcionq que nos trae la cantidad de productos que hay en el carrito
  const {totalQuantity} = useContext(CartContext)


  return (
    <Link to={"/cart"} id="contenedor-carrito-contador">
        <FaCartShopping id='carrito' size={35} /> 
        <h3 id="contador">{totalQuantity()}</h3> 
    </Link>
  )
}

export default CartWidget
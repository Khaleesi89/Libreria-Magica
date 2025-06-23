import './CartWidget.css'
import carrito from '../../assets/carrito.png'


const CartWidget = () => {
  return (
    <div id="contenedor-carrito-contador">
        <img src={carrito} id="carrito" alt="libros logo"></img>
        <h3 id="contador">0</h3> 
    </div>
  )
}

export default CartWidget
import './Cart.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {

    //funciones y variables que se usarán en el componente
    const { cart, totalPrice, deleteProductById, vaciarCarrito } = useContext(CartContext);

    //setea la funcion que se usará de condicional para cuando se haga click en Vaciar Carrito
    const isCartEmpty = cart.length === 0;

    return (
        <div style={{ marginTop: '50px', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Carrito de compras</h2>
            {isCartEmpty ? (
                <>
                    <p style={{textAlign: 'center', marginTop: '50px', padding: '20px' }}>
                        El carrito está vacío. ¡Agrega productos para comprar!
                    </p>
                    <Link to="/" style={{ margin:'auto', padding:'auto' }} className='finalizarcompra' >Siga comprando</Link>
                </>
            ) : (
                <>
                    <table style={{ padding: '20px', marginTop: '50px', width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th className="thStyle">Imagen</th>
                                <th className="thStyle">Nombre</th>
                                <th className="thStyle">Precio</th>
                                <th className="thStyle">Cantidad</th>
                                <th className="thStyle">Total Parcial</th>
                                <th className="thStyle">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                                <tr key={item.id}>
                                    <td className="tdStyle">
                                        <img src={item.image} alt={item.name} style={{ width: '50px' }} />
                                    </td>
                                    <td className="tdStyle">{item.name}</td>
                                    <td className="tdStyle">$ {item.price.toFixed(2)}</td>
                                    <td className="tdStyle">{item.quantity}</td>
                                    <td className="tdStyle">$ {(item.quantity * item.price).toFixed(2)}</td>
                                    <td className="tdStyle">
                                        <FaTrashAlt onClick={() => deleteProductById(item.id)} size={35} color='#1E3A8A'  />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="precioTotal">Precio total: $ {totalPrice()}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <button className='finalizarcompra' onClick={() => vaciarCarrito()} disabled={isCartEmpty}>Vaciar Carrito</button>
                        {
                          isCartEmpty ? (
                              <Link id="finalizar" to="/checkout" disabled className='finalizarcompra'>Finalizar Compra</Link>
                          ) : (
                            <Link id="finalizar" to="/checkout" className='finalizarcompra'>Finalizar Compra</Link>
                          )
                        }
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
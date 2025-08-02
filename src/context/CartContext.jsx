import { createContext, useState } from "react";


//creamos contexto para carrito
const CartContext = createContext();


const CartProvider = ({children}) =>{

    //variables
    const [cart, setCart] = useState([])

    
    //agrega al carrito el producto seleccionado y verifica si ya lo tenemos o no en el carrito
    const addProductInCart = (product)=>{
        const productInCart = cart.find(productCart => productCart.id === product.id )
        if(productInCart){
            const updatedCart = cart.map(productCart => productCart.id === product.id ? { ...productCart, quantity: productCart.quantity + product.quantity } : productCart);
            setCart(updatedCart)
        }else{
            setCart([...cart,product])
        }
    }

    //calcular cantidades del carrito para mostrarlo en el navbar
    const totalQuantity = () =>{
        //el cero es para iniciarlizar total
        const total = cart.reduce((total, product)=> total + product.quantity,0);
        return total;
    }

    
    //obtener el precio total de lo que está en el carrito
    const totalPrice = () =>{
        const total = cart.reduce((total, product) => total + (product.price * product.quantity),0);
        return total;
    }

    //borrar productos
    const deleteProductById = (id) =>{
        const productsFilter = cart.filter((product)=>product.id !== id)
        //retorna array sin ese producto
        setCart(productsFilter)
    }


    //vaciar carrito
    const vaciarCarrito = () =>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart,addProductInCart,totalQuantity, totalPrice, deleteProductById, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}
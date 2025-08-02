import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import FormCheckOut from '../FormCheckOut/FormCheckOut';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../db/db.js';


const CheckOut = () => {

    //variables y funciones que se usarán
    const [orderId, setOrderId] = useState(null) 
    const{cart, totalPrice, vaciarCarrito} = useContext(CartContext)
    const[dataForm, setDataForm] = useState({
        fullname:"",
        phone:"",
        email:"",
        direccion: ""
    })

    //cada vez que realiza un cambio en un input, guarda la info nueva en dataForm
    const handleChangeInput = (event) =>{
        setDataForm({...dataForm, [event.target.name] : event.target.value})
    }
    

    //enviar el formulario
    const sendOrder = (event) =>{
        event.preventDefault()
        
        const order = {
            buyer:{...dataForm},//datos del comprador
            products : {...cart},//productos carrito
            total: totalPrice()
        }    
        uploadOrder(order);
    }    
    
    
    //para subir la orden a firebase
    const uploadOrder = async(order) =>{
        try {
            const orderRef = collection(db,"orders");//si la coleccion no existe, la crea automaticamente
            const response = await addDoc(orderRef, order);
            setOrderId(response.id)
            vaciarCarrito()
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div style={{ marginTop: '50px', padding: '20px', textAlign:"center", marginBottom:"50px" }} >
        {
            orderId ? (
                <div>
                    <h2>Orden generada correctamente!</h2>
                    <p>Guarde el identificador de su orden: {orderId}</p>
                </div>
            ) : (
            <FormCheckOut dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder}/>
            )

        }
    </div>
  )
}

export default CheckOut
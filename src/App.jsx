import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Error404 from './components/Error404/Error404'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
//import JsonUploader from './components/JsonUploader/JsonUploader'////SE CREO PARA CARGAR EL JSON EN LA BASE DE DATOS Y FUNCIONÓ


function App() {
  

  return (
      <BrowserRouter>
        <CartProvider>
          <div className='navbar-contenedor'>
            <NavBar/>
            <div className='contenido'>
            <Routes>
                <Route path="/" element={ <ItemListContainer /> } />
                <Route path="/category/:category" element={ <ItemListContainer /> } />
                <Route path="/detail/:productId" element={ <ItemDetailContainer /> } />
                <Route path="/cart" element={<Cart/>}/>
                {/* Ruta para manejar los errores 404 */}
                <Route path="*" element={<Error404 />} />
                <Route path="/checkout" element={<CheckOut/>}/>
            </Routes>
              </div>
          </div>
          {/*SE CREO PARA SUBIR EL JSON A DB<JsonUploader/>*/}
        </CartProvider>
      </BrowserRouter>
  )
}

export default App

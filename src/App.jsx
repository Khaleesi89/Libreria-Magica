import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Error404 from './components/Error404/Error404'
//              <ItemListContainer/>
      //        <ItemDetailContainer/>


function App() {
  

  return (
      <BrowserRouter>
        <div className='navbar-contenedor'>
          <NavBar/>
          <div className='contenido'>
          <Routes>
              <Route path="/" element={ <ItemListContainer /> } />
              <Route path="/category/:category" element={ <ItemListContainer /> } />
              <Route path="/detail/:productId" element={ <ItemDetailContainer /> } />

              {/* Ruta para manejar los errores 404 */}
              <Route path="*" element={<Error404 />} />
          </Routes>
            </div>
        </div>
      </BrowserRouter>
  )
}

export default App

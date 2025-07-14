import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'


function App() {
  

  return (
    <>
      <div className='navbar-contenedor'>
        <NavBar/>
      </div>
      <div className='contenido'>
          <ItemListContainer/>
      </div>
    </>
  )
}

export default App

import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
        <div className="navBar-menu">
            <div className="logoYnombre">
                <img id="logoLibro" src={logo} alt="libros logo"></img>
                <h1 id="titulo" alt="Aura libreria">Librería Mágica</h1>
            </div>
            <nav>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Novelas</a></li>
                <li><a href="#">Derecho</a></li>
                <li><a href="#">Clásicos</a></li>
                <li><a href="#">Autoayuda</a></li>
                <li><a href="#">Poesía</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
  )
}

export default NavBar
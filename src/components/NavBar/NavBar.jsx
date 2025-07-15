import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
        <div className="navBar-menu">
            <div className="logoYnombre">
                <Link to="/">
                    <img id="logoLibro" src={logo} alt="libros logo"></img>
                </Link>
                <h1 id="titulo" alt="Aura libreria">Librería Mágica</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/category/novelas">Novelas</Link>
                    </li>
                    <li>
                        <Link to="/category/derecho">Derecho</Link>
                    </li>
                    <li>
                        <Link to="/category/clasicos">Clásicos</Link>
                    </li>
                    <li>
                        <Link to="/category/autoayuda">Autoayuda</Link>
                    </li>
                    <li>
                        <Link to="/category/poesia">Poesía</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget/>
        </div>

        
  )
}

export default NavBar
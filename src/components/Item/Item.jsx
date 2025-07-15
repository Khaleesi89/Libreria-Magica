import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
            <div className="container-product">
                <div className="images">
                    <img src={product.image} alt=""/>
                </div>
                <div className="product">
                    <h3 id="nombreProdu">{product.name}</h3>
                    <h4>${product.price}</h4>
                    <br></br>
                    <p id="reseniaProdu" className="desc">{product.description}</p>
                    <div className="buttons">
                        <Link to={"/detail/" + product.id}>
                            <button className="add">Ver +</button>
                        </Link>
                        <button className="like"><span>♥</span></button>
                    </div>
                </div>
            </div>

  )
}

export default Item
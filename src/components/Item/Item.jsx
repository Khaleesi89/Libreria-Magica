import './Item.css';

const Item = ({product}) => {
  return (
            <div class="container-product">
                <div class="images">
                    <img src={product.image} alt=""/>
                </div>
                <div class="product">
                    <h3 id="nombreProdu">{product.name}</h3>
                    <h4>${product.price}</h4>
                    <br></br>
                    <p id="reseniaProdu" class="desc">{product.description}</p>
                    <div class="buttons">
                        <button class="add">Agregar</button>
                        <button class="like"><span>♥</span></button>
                    </div>
                </div>
            </div>

  )
}

export default Item
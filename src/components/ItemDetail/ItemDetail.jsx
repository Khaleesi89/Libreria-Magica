import './ItemDetail.css';

//abreviatura rcc
//product = {} se pone par que no de errores por si no manda nada
const ItemDetail = ({product = {}}) => {
  return (
    <div className="product-card">
        <div className="product-image">
            <img src={product.image} alt="product"/>
        </div>
        <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
        </div>
        <div className="buttons">
            <button className="add">Agregar</button>
            <button className="like"><span>♥</span></button>
        </div>
    </div>


  )
}

export default ItemDetail
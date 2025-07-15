import Loading from "../Loading/Loading";
import useProduct from "../../hooks/useProduct.js";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
    const {productId} = useParams()
    const {product, loading} = useProduct(productId);

    console.log(product)
    return (
        <div>
            {
                loading ? <Loading/> : <ItemDetail product={product}/>
            }
        </div>
    )

}

export default ItemDetailContainer;
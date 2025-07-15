import './ItemListContainer.css';
import useProducts from '../../hooks/useProducts.js';
import {ItemList} from '../ItemList/ItemList.jsx';
import Loading from '../Loading/Loading.jsx';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const{category} = useParams();
  const {products, loading} = useProducts(category);

  return (
          <div className='itemListConteiner'>
            <h2>¡¡¡No se pierda éstas promociones disponibles por el día del padre!!!</h2>
              {
                loading ? <Loading /> : <ItemList products={products} />
              }
          </div>
        )
}

export default ItemListContainer;
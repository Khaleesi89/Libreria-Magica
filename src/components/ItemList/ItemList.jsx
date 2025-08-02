import './ItemList.css';
import Item from '../Item/Item';
import hocFilterProducts from '../../hoc/hocFilterProducts';

const ItemList = ({ products }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
};

const ItemListWithSearch = hocFilterProducts(ItemList);

export { ItemList, ItemListWithSearch };


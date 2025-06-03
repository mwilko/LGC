import { Product } from 'interfaces/product';
import { Item } from '../item/Item';
import './ItemList.css';

type props = {
  products: Product[];
};

export const ItemList = ({ products }: props) => {
  return (
    <div className="item-list">
      {products?.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

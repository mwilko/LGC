import React, { useEffect, useState } from 'react';
// Components
import { ItemList } from './components/itemList/ItemList';
import { Loader } from 'components/common/loader/Loader';
// Icons
import { ReactComponent as ErrorIcon } from 'assets/icons/error.svg';
// Data
import { products as productData } from 'data/products';
// Interfaces
import { Product } from 'interfaces/product';
// Styles
import './ItemListContainer.css';

type props = {
  category: string;
  limit: boolean;
};

export const ItemListContainer = ({ category, limit }: props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      let filtered = productData;

      if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
      } else {
        filtered = filtered.filter(p => p.category !== 'other');
      }

      if (limit) {
        // Example: limit to 4 Wagyu products (can customize logic here)
        filtered = filtered
          .filter(p => p.category === 'wagyu')
          .slice(0, 4);
      }

      setProducts(filtered);
      setError(filtered.length === 0);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [category, limit]);

  if (loading) return <div className="loader-error"><Loader /></div>;
  if (error) return (
    <div className="loader-error">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1em',
        color: '#6b6b6b'
      }}>
        <ErrorIcon style={{ width: '32px' }} />
        <h3 className="error-title"> No products available </h3>
      </div>
    </div>
  );

  return <ItemList products={products} />;
};

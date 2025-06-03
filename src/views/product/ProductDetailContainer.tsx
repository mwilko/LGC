import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
// Interfaces
import { Product } from 'interfaces/product';
// Components
import { ProductDetail } from './components/productDetail/ProductDetail';
// Data
import { products } from 'data/products';
// Icons
import { ReactComponent as GobackIcon } from 'assets/icons/go-back.svg';
// Styles
import './ProductDetailContainer.css';

export const ProductDetailContainer = () => {
  const { productID } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productID) {
      navigate('/');
      return;
    }

    // Simulate loading delay (optional)
    setLoading(true);
    const foundProduct = products.find(p => p.id === productID);

    if (foundProduct) {
      setProduct(foundProduct);
      setError(false);
    } else {
      setError(true);
    }
    setLoading(false);
  }, [productID, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="loader-error">Loading...</div>;
  }

  if (error) {
    return (
      <div className="loader-error" style={{ textAlign: 'center', color: '#6b6b6b' }}>
        <GobackIcon style={{ width: '32px' }} />
        <h3 className="error-title">Product not available</h3>
        <Link to="/shop/all">
          <button className="gotoshop-btn">
            <GobackIcon className="goback-icon" />
            <span>Back to Shop</span>
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-gotoshop">
        <Link to="/shop/all">
          <button className="gotoshop-btn">
            <GobackIcon className="goback-icon" />
            <span>Shop</span>
          </button>
        </Link>
        {product && <ProductDetail product={product} />}
      </div>
    </div>
  );
};

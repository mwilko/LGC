import { Link } from 'react-router-dom';
// Icons
import { ReactComponent as InfoIcon } from 'assets/icons/info.svg';
// Interfaces
import { Product } from 'interfaces/product';
// Styles
import './Item.css';
// Images
import lgcLogo from 'assets/images/lgc_logo.jpg'; // Fallback logo

// This file defines the Item component that displays product information in a card format.

type props = {
  product: Product;
};

export const Item = ({ product }: props) => {
  const { id, name, price, category, img } = product;

  return (
    <Link to={`/product/${id}`}>
      <div className="item-card">
        <div className="ic-img">
          <img
            src={img || lgcLogo}
            alt={name}
            onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = lgcLogo;
            }}
            />
          <div className="ic-overlay">
            <button className="product-detail-btn">
              <InfoIcon className="info-icon" />
            </button>
          </div>
        </div>
        <div className="ic-name-price">
          <h4>{name}</h4>
          <span>£ {price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
};

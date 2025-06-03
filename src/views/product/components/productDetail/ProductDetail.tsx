import { useState } from 'react';
// Router
import { Link } from 'react-router-dom';
// Interfaces
import { Product } from 'interfaces/product';
// Styles
import './ProductDetail.css';
// Images
import lgcLogo from 'assets/images/lgc_transparent.png';


type props = {
  product: Product;
};

export const ProductDetail = ({ product }: props) => {
  const { id, name, price, description, img, category } = product;

//   // Optional: manage selected quantity if needed (not tied to a cart)
//   const [selectedQty, setSelectedQty] = useState(1);

  console.log('img:', img);


  return (
    <div className="product-detail-card">

      {/* Product main info */}
      <div className="pdc-main">
        <div className="pdcm-img">
            <img
            src={img || lgcLogo}
            alt={name}
            onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = lgcLogo;
            }}
            />
        </div>

        <div className="pdcm-data">
          <h3>{name}</h3>
          <span>£ {price.toFixed(2)}</span> {/* Display price with 2 decimal places */}
          <hr />

          {/* Quantity selector if needed */}
          {/* <div className="qty-selector">
            <label htmlFor="qty">Quantity:</label>
            <input
              type="number"
              id="qty"
              min="1"
              value={selectedQty}
              onChange={(e) => setSelectedQty(parseInt(e.target.value) || 1)}
            />
          </div> */}

          {/* Example action buttons */}
          <div className="fb-buttons">
            <Link to="/shop" className="button fb-continue-shopping-btn">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Product description */}
      <div className="pdc-description">
        <h4>Description</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

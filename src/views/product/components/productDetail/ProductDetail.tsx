import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'interfaces/product';
import lgcLogo from 'assets/images/lgc_transparent.png';
import lgcAltLogo from 'assets/images/lgc_logo_new_trans.png';
import './ProductDetail.css';

type props = {
  product: Product;
};

export const ProductDetail = ({ product }: props) => {
  const { id, name, description, img } = product;
  const [imageFailed, setImageFailed] = useState(false);
  const hasPhoto = img && img !== lgcLogo && img !== lgcAltLogo && !imageFailed;

  useEffect(() => setImageFailed(false), [img]);

  return (
    <article className="product-detail-card" aria-labelledby="product-heading">
      <Link to="/shop/all" className="product-detail-card__back">
        <span aria-hidden="true">&larr;</span> Back to Our Produce
      </Link>
      <div className="pdc-main">
        <div className={`pdcm-img${hasPhoto ? '' : ' pdcm-img--placeholder'}`}>
          {hasPhoto ? (
            <img src={img} alt={name} onError={() => setImageFailed(true)} />
          ) : (
            <span aria-hidden="true">{name}</span>
          )}
        </div>
        <div className="pdcm-data">
          <p className="product-detail-card__eyebrow">The Lincolnshire Game Company</p>
          <h1 id="product-heading">{name}</h1>
          <p>{description || `Speak to our team about ${name.toLowerCase()}, including available formats and your requirements.`}</p>
          <p className="product-detail-card__availability">
            Contact us for availability, pack sizes and current pricing.
          </p>
          <Link to={`/contact?product=${encodeURIComponent(id)}`} className="site-button">
            Enquire About This Product
          </Link>
        </div>
      </div>
    </article>
  );
};

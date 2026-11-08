import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'interfaces/product';
import lgcLogo from 'assets/images/lgc_logo_new_trans.png';
import lgcAltLogo from 'assets/images/lgc_transparent.png';
import './Item.css';

type props = {
  product: Product;
};

export const Item = ({ product }: props) => {
  const { id, name, img } = product;
  const [imageFailed, setImageFailed] = useState(false);
  const hasPhoto = img && img !== lgcLogo && img !== lgcAltLogo && !imageFailed;

  useEffect(() => setImageFailed(false), [img]);

  return (
    <Link to={`/product/${id}`} className="item-card">
      <div className={`ic-img${hasPhoto ? '' : ' ic-img--placeholder'}`}>
        {hasPhoto ? (
          <img src={img} alt={name} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <span aria-hidden="true">{name}</span>
        )}
      </div>
      <div className="ic-name-price">
        <h3>{name}</h3>
        <p>Availability and pricing on enquiry</p>
        <span className="item-card__link">View Product <span aria-hidden="true">&rarr;</span></span>
      </div>
    </Link>
  );
};

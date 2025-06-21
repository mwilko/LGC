import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Data
import { products } from 'data/products';
// Components
import { ItemList } from 'components/common/itemListContainer/components/itemList/ItemList';
import './Shop.css';

export const Shop = () => {
    const { category } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (
            category !== 'all' &&
            category !== 'wagyu' &&
            category !== 'feedlot' &&
            category !== 'standard' &&
            category !== 'other'
        ) {
            navigate('/shop/all');
        }
    }, [category, navigate]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleClickCategory = (cat: string) => {
        navigate(`/shop/${cat}`);
    };

    const filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    return (
        <div className="shop">
            <div className="shop-banner"></div>

            <section className="shop-main">
                <div className="sm-header">
                    <div className="smh-line"></div>
                    <h1>Product Catalogue</h1>
                    <div className="smh-line"></div>
                </div>

                <div className="sm-cat-wrapper">
                    {['all', 'wagyu', 'feedlot', 'standard', 'other'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleClickCategory(cat)}
                            style={category === cat ? { color: 'var(--white-50)' } : {}}
                            className="sm-cat"
                        >
                            {cat === 'all' ? 'All Meats' :
                             cat === 'wagyu' ? 'Wagyu Meats' :
                             cat === 'feedlot' ? 'Feedlot Meats' :
                             cat === 'standard' ? 'Standard Meats' :
                             'Other Products'}
                        </button>
                    ))}
                </div>

                <ItemList products={filteredProducts} />
            </section>

            <h3 className="shop-legend">
                Please contact us for any enquiries regarding our products.
            </h3>
        </div>
    );
};

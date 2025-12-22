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
            category !== 'venison' &&
            category !== 'poultry' &&
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

    const categories = [
        { id: 'all', label: 'All Products', count: products.length },
        { id: 'venison', label: 'Venison', count: products.filter(p => p.category === 'venison').length },
        { id: 'poultry', label: 'Poultry', count: products.filter(p => p.category === 'poultry').length },
        { id: 'standard', label: 'Standard', count: products.filter(p => p.category === 'standard').length },
        { id: 'other', label: 'Other', count: products.filter(p => p.category === 'other').length },
    ];

    const getCategoryTitle = () => {
        switch(category) {
            case 'all': return 'All Products';
            case 'venison': return 'Venison';
            case 'poultry': return 'Poultry';
            case 'standard': return 'Standard Meats';
            case 'other': return 'Other Products';
            default: return 'All Products';
        }
    };

    return (
        <div className="shop">
            <div className="shop-banner">
                <div className="shop-banner-content">
                    <h1>Premium Game Meats</h1>
                    <p>Sustainably sourced, exceptional quality</p>
                </div>
            </div>

            <section className="shop-main">
                <div className="shop-container">
                    <div className="shop-header">
                        <h2>Product Catalogue</h2>
                        <p className="shop-subtitle">
                            Browse our selection of premium game meats
                        </p>
                    </div>

                    <div className="category-filter">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleClickCategory(cat.id)}
                                className={`category-btn ${category === cat.id ? 'active' : ''}`}
                            >
                                <span className="category-label">{cat.label}</span>
                                <span className="category-count">{cat.count}</span>
                            </button>
                        ))}
                    </div>

                    <div className="products-section">
                        <div className="products-header">
                            <h3>{getCategoryTitle()}</h3>
                            <span className="product-count">{filteredProducts.length} items</span>
                        </div>
                        
                        <ItemList products={filteredProducts} />
                    </div>
                </div>
            </section>

            <div className="shop-footer">
                <div className="shop-footer-content">
                    <h3>Need Assistance?</h3>
                    <p>
                        Our team is here to help with product enquiries, custom orders, and bulk purchases.
                    </p>
                    <a href="/contact" className="shop-contact-btn">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    );
};
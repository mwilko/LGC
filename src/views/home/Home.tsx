import { useEffect, useRef, useState } from 'react';
// Logo
import Logo from 'assets/images/lgc_transparent.png';
// Router
import { Link, useLocation } from 'react-router-dom';
// Icons
import { ReactComponent as AwardIcon } from 'assets/icons/award.svg';
import { ReactComponent as AddCartIcon } from 'assets/icons/add-cart.svg';
// Images
import provoloneCheesesImg from 'assets/img/others/provolone.webp';
import sausagesImg from 'assets/img/others/sausages.webp';
import breadsImg from 'assets/img/others/breads.webp';
import aboutUsImg from 'assets/images/sim_and_t.jpg';
// Components
import { ItemListContainer } from 'components/common/itemListContainer/ItemListContainer';
import { RecipeListContainer } from 'components/common/recipeListContainer/RecipeListContainer';
import { VideoListContainer } from 'components/common/videoListContainer/VideoListContainer';
// Utils
import { isIOS } from 'utils/isIOS';
// Data
// Styles
import './Home.css';


export const Home = () => {
    
    /* Loading state for loading screen. */
    const [loadingScreen, setLoadingScreen] = useState({
        loading: true,
        percentage: 0
    });

    /* This useRef() hook creates a reference
    to about us section. */
    const aboutUs = useRef<HTMLElement>(null);

    /* Function that scrolls to about us section. */
    const scrollToAboutUs = () => aboutUs?.current?.scrollIntoView();

    /* The useLocation() hook returns an
    object that contains all the url path info. */
    const location = useLocation();

    /* Scroll to top or to about us section
    every time the window location changes. */
    useEffect(() => {
        
        location.hash === '#about-us' ?
            scrollToAboutUs()
        :
            window.scrollTo(0, 0);

    }, [location])

    /* Loading screen control. */
    useEffect(() => {
        let loadingInterval = setInterval(() => {
            loadingScreen.percentage < 100 ? 
                setLoadingScreen({
                    ...loadingScreen,
                    percentage: loadingScreen.percentage++
                })
            : 
                setTimeout(() => {
                    setLoadingScreen({
                        ...loadingScreen,
                        loading: false
                    })
                    clearInterval(loadingInterval);
                }, 750)
        }, 20);

        setTimeout(() => {
            setLoadingScreen({
                ...loadingScreen,
                percentage: 0
            })
        }, 500);
    }, [])

    return (
        <>  
            {/* Loading Screen */}
            <div style={loadingScreen.loading ? {} : {opacity: '0', pointerEvents: 'none'}} className="home-loading">
                <div className="home-loading-content">
                    <img src={Logo} alt="The Lincolnshire Game Company" />
                    <span>{loadingScreen.percentage}%</span>   
                </div>
            </div>

            {/* Home */}
            <div className="home">

                {/* Hero Section */}
                <section 
                    style={
                        isIOS() ? 
                            {backgroundAttachment: 'initial'}   
                        :
                            {}
                    }
                    className="hero-section"
                >
                    <div className="hs-greeting">
                        <h1>Lincolnshire's Finest Game Provider</h1>
                        <Link className="button hsg-search-meats-btn" to='/shop/all'>Search Produce</Link>    
                    </div>
                </section>

                {/* About Us Section */}
                <section ref={aboutUs} className="about-us-section">
                    
                    <div className="aus-grid">
                        <img src={aboutUsImg} alt="Meats Aside" />

                        <div className="aus-info">
                            <h2>About Us</h2>
                            <p>At The Lincolnshire Game Company, we take pride in delivering the finest wild game meat from the heart of Lincolnshire. With a strong focus on traceability, sustainability, and traditional values, we supply premium-quality produce to customers across the UK and Europe.
                            </p>
                            <p>Established in 2013, we provide venison and poultry products to an proffesional standard to customers. We strive for the best quality and service for our customers.</p>
                            <Link className="button aus-btn" to='/about-us'>Our Story</Link>
                        </div>
                    </div>
                </section>

                {/* Product Selections */}
                <section className="bestsellers-section">

                    <div className="bs-title">
                        <AwardIcon className="award-icon" />
                        <h2>Our Products</h2>
                    </div>
                    
                    {/* Bestsellers Products Wrapper */}
                    <ItemListContainer category={'venison'} limit={true} />
                    
                    <Link className="button bs-btn" to='/shop/all'>View All Meats</Link>

                </section>

            </div>
        </>
    )
}

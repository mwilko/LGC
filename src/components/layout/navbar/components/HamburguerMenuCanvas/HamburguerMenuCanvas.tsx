import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import icons
import { ReactComponent as CloseIcon } from 'assets/icons/x.svg';
import { ReactComponent as GoBackIcon } from 'assets/icons/arrow-left.svg';
// Import styles
import './HamburguerMenuCanvas.css';

// Props type
type props = {
    hamburguerMenuOpen: boolean;
    closeHamburguerMenu: () => void;
}

export const HamburguerMenuCanvas = ({ hamburguerMenuOpen, closeHamburguerMenu }: props) => {

    const [viewCategories, setViewCategories] = useState<boolean>(false);

    return (
        // Hamburguer Menu Canvas
        <div 
            className="hm-canva"
            style={
                hamburguerMenuOpen ? 
                {
                    opacity: '1',
                    pointerEvents: 'all',
                    transform: 'translateX(0)'
                } 
                : {
                    opacity: '0',
                    pointerEvents: 'none',
                    transform: 'translateX(-95%)'
                }
            }
        >
            
            {/* Go Back Button */}
            <button 
                style={
                    viewCategories ? {transform: 'translateX(0)'} : {}
                }
                className="goback-btn-hm" 
                onClick={() => setViewCategories(false)}
            >
                <GoBackIcon className="goback-icon-hm" />
            </button>

            {/* Close Button */}
            <button className="close-btn" onClick={ () => {
                closeHamburguerMenu();
                setTimeout(() => setViewCategories(false), 500); 
            }}>
                <CloseIcon className="close-icon" />
            </button>
            
            {/* Links */}
            <div className="main-links" style={
                viewCategories ? {transform: 'translateX(-100vw)'} : {}
            }>
                <Link className="navbar-link nbl-hm" to='/' onClick={ () => closeHamburguerMenu() }> Home </Link>
                <Link className="navbar-link nbl-hm" to='/about-us' onClick={ () => closeHamburguerMenu() }> About </Link>
                <Link className="navbar-link nbl-hm" to='/shop/all' onClick={ () => closeHamburguerMenu() }> Shop </Link>
                <button className="navbar-link nbl-hm nbl-hm-cat" onClick={ () => setViewCategories(true) }> More </button>
            </div>

            <div className="cat-links" style={
                viewCategories ? {transform: 'translateX(0)'} : {opacity: '0'}
            }>
                <Link className="navbar-link nbl-hm" to='/awards' onClick={() => {
                    closeHamburguerMenu();
                    setTimeout(() => setViewCategories(false), 500);
                }}>Awards & Recognition</Link>
                <Link className="navbar-link nbl-hm" to='/partnerships' onClick={() => {
                    closeHamburguerMenu();
                    setTimeout(() => setViewCategories(false), 500);
                }}>Partnerships</Link>
                <Link className="navbar-link nbl-hm" to='/blogs' onClick={() => {
                    closeHamburguerMenu();
                    setTimeout(() => setViewCategories(false), 500);
                }}>Blogs</Link>
                <Link className="navbar-link nbl-hm" to='/sponsors' onClick={() => {
                    closeHamburguerMenu();
                    setTimeout(() => setViewCategories(false), 500);
                }}>Sponsors</Link>
            </div>
        </div>    
    )
}

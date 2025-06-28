import React from 'react';
// Router
import { Routes, Route, Navigate } from 'react-router-dom';
// Views
import { Home } from 'views/home/Home';
import { Shop } from 'views/shop/Shop';
import { ProductDetailContainer } from 'views/product/ProductDetailContainer';
import { Contact } from 'views/contact/Contact';
import { AboutUs } from 'views/aboutUs/AboutUs';
import { Awards } from 'views/awards/Awards';
import { Partnerships } from 'views/partnerships/Partnerships';
import { Blogs } from 'views/blogs/Blogs';
import { Sponsors } from 'views/sponsors/Sponsors';
// import { Billing } from 'views/billing/Billing';
// import { Cart } from 'views/cart/Cart';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop/:category' element={<Shop />} />
            <Route path='/shop' element={<Navigate to='/shop/all' />} />
            <Route path='/product/:productID' element={<ProductDetailContainer />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/awards' element={<Awards />} />
            <Route path='/partnerships' element={<Partnerships />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/sponsors' element={<Sponsors />} />
            {/* Any unknown path will be redirected to home page */}
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    )
}

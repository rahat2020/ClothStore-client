import React from 'react';
import Header from '../Header/Header'
import Features from '../Features/Features';
import Products from '../Products/Products';
import ChoseUs from '../ChoseUs/ChoseUs';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';
import Offer from '../Offer/Offer';
import Brands from '../Brands/Brands';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <Products></Products>
            <Offer></Offer>
            <ChoseUs></ChoseUs>
            <Testimonial></Testimonial>
            <Brands></Brands>
            <Footer></Footer>
        </div>
    );
};

export default Home;
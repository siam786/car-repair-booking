import React from 'react';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import './Header.css';

const Header = () => {
    return (
        <section className="header-container">
            <NavBar />
            <Slider/>
            <Banner/>
        </section>
    );
};

export default Header;
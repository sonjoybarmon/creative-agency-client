import React from 'react';
import Footer from '../../Footer/Footer';
import Brand from '../Brand/Brand';
import Feedback from '../Feedback/Feedback';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <>
            <Header />
            <Brand />
            <Services />
            <Works />
            <Feedback />
            <Footer />
        </>
    );
};

export default Home;
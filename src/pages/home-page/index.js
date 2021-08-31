import React from 'react';
import { Banner, Content, Expertises, FooterMenu, Navbar, WorkWith,Footer } from '../../components/home-page';

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Content/>
            <Expertises/>
            <WorkWith/>
            <FooterMenu/>
            <Footer/>
        </div>
    );
}

export default HomePage;

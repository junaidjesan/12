import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer';
import Header from '../../Sheard/Header';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;
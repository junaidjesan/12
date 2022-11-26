import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardLeft from '../DashboardComponents/DashboardLeft';
import Footer from '../Sheard/Footer';
import Header from '../Sheard/Header';

const DeshBoardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className='lg:flex py-20'>
                <div className='md:w-3/12 justify-start mx-auto'>
                    <DashboardLeft></DashboardLeft>
                </div>
                <div className='w-7/12 mx-auto justify-center'>
                <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DeshBoardLayout;
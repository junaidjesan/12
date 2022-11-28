import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import CategorisItems from './CategorisItems/CategorisItems';
import FeedBack from './FeedBack/FeedBack';
import UserCounter from './UserCounter/UserCounter';

const HomePages = () => {
    return (
        <div>
            <div className='w-full'>
                <Banner></Banner>
            </div>
            <div className='w-full'>
                <Advertise></Advertise>
            </div>
            <div>
                <CategorisItems></CategorisItems>
            </div>
            <div className='my-10'>
                <UserCounter></UserCounter>
            </div>
            <div>
                <FeedBack></FeedBack>
            </div>
        </div>
    );
};

export default HomePages;
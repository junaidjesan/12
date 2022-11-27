import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLeft = () => {
    return (
        <div className='grid grid-cols-3 mb-9 mx-5 lg:grid-cols-1 gap-5 text-start'>
            <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard'>All Sellers</Link></div>
            <div className='hover:border-blue-600 py-2 px-1 ac hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/byers'>All Byers</Link></div>
            <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/reported-items'>Reported Items</Link></div>
            <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/feedback'>Feedback</Link></div>

            <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/add-products'>Add a Product</Link></div>
            <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/my-products'>My Products</Link></div>
            <div className='hover:border-blue-600 py-2 px-1 active:bg-green-700 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/my-byers'>My Byers</Link></div>

            <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/my-orders'>My Orders</Link></div>
        </div>
    );
};

export default DashboardLeft;
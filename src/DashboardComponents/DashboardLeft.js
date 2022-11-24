import React from 'react';
import { Link } from 'react-router-dom';

const DashboardLeft = () => {
    return (
        <div className='grid grid-cols-1 gap-5 text-start'>
            <div><Link to='/dashboard/sellers'>All Sellers</Link></div>
            <div><Link to='/dashboard/byers'>All Byers</Link></div>
            <div><Link to='/dashboard/reported-items'>Reported Items</Link></div>

            <div><Link to='/dashboard/add-products'>Add a Products</Link></div>
            <div><Link to='/dashboard/my-products'>My Products</Link></div>
            <div><Link to='/dashboard/my-byers'>My Byers</Link></div>

            <div><Link to='/dashboard/my-orders'>My Orders</Link></div>
        </div>
    );
};

export default DashboardLeft;
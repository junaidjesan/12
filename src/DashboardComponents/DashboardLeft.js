import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/WebContext';
import UseAdmin from '../Hook/UseAdmin';
import UseSeller from '../Hook/UseSeller';

const DashboardLeft = () => {
    const { usersWithRole, user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    console.log(isAdmin)
    return (
        <div className='grid grid-cols-3 mb-9 mx-5 lg:grid-cols-1 gap-5 text-start'>
            {
                (isAdmin === true) &&
                <div>
                    <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/sellers'>All Sellers</Link></div>
                    <div className='hover:border-blue-600 py-2 px-1 ac hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/byers'>All Byers</Link></div>
                    <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/reported-items'>Reported Items</Link></div>
                    <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/feedback'>Feedback</Link></div>
                </div>
            }

            {
                (isSeller === true) &&
                <div>
                    <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/add-products'>Add a Product</Link></div>
                    <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/seller-product'>My Products</Link></div>
                    <div className='hover:border-blue-600 py-2 px-1 active:bg-green-700 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/my-byers'>My Byers</Link></div>
                </div>
            }

            <div className='hover:border-blue-600 py-2 px-1 hover:border-b-2  delay-75 duration-75'><Link to='/dashboard/my-orders'>My Orders</Link></div>
        </div>
    );
};

export default DashboardLeft;
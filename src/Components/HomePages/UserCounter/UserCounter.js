import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/WebContext';

const UserCounter = () => {
    const {usersWithRole}=useContext(AuthContext)

    const filteruser = usersWithRole.filter(obj => {
        return obj.role === 'Buyer';
    });
    const filterseller = usersWithRole.filter(obj => {
        return obj.role === 'Seller';
    });
    return (
        <div>
            <div className="stats stats-vertical bg-primary lg:stats-horizontal shadow">

                <div className="stat">
                    <div className="stat-title">Buyers</div>
                    <div className="stat-value">{filteruser.length}</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Sellers</div>
                    <div className="stat-value">{filterseller.length}</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default UserCounter;
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/WebContext';

const AllSellers = () => {
    const {usersWithRole}=useContext(AuthContext)

    const filtered = usersWithRole.filter(obj => {
        return obj.role === 'Seller';
    });
    return (
        <div>
            {
                filtered.map(role =>
                <div key={role._id} className="card w-3/4 mb-9 mx-auto bg-base-100 shadow-xl">
                    <div className="card-body flex">
                        <h2 className="card-title">
                            Name: {role.name}
                        </h2>
                        <h1 className='text-start'>Email: {role.email}</h1>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">verify</div>
                            <div className="badge badge-outline">delete</div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default AllSellers;
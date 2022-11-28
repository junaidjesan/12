import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';
import UseAdmin from '../../Hook/UseAdmin';

const AdminRout = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin,adminLoading]=UseAdmin(user?.email)
    const location = useLocation()

console.log(isAdmin)
    if (loading&&adminLoading) {
        return (
                <div class="flex justify-center items-center">
                    <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                )
    }

    if(isAdmin===true){
        return children
    }

    return <Navigate to="/" state={{ from: location }} replace />;

};

export default AdminRout;
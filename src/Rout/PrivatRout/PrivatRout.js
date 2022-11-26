import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/WebContext';

const PrivatRout = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return (
            <div class="flex justify-center items-center">
                <div class="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children
};

export default PrivatRout;
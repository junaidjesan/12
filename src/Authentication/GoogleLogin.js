import React, { useContext } from 'react';
import { AuthContext } from '../Context/WebContext';

const GoogleLogin = () => {
    const {GoogleCreateUser}=useContext(AuthContext)

    const handleGoogleLogIn=()=>{
        GoogleCreateUser()
        .then(res=>{
            console.log(res)
        })
        .catch(er=>{})
    }
    return (
        <div>
            <div className="form-control mt-2">
                <button onClick={handleGoogleLogIn} className="btn btn-primary">Continue With Google</button>
            </div>
        </div>
    );
};

export default GoogleLogin;
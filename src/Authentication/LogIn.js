import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/WebContext';
import useToken from '../Hook/UseToken';
import GoogleLogin from './GoogleLogin';

const LogIn = () => {
    const {EmailLoggedIn}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const [loginVerifyToken,setLoginVerifyToken]=useState('')
    const [token]=useToken(loginVerifyToken)
    const form = location.state?.from?.pathname || '/'

    if(token){
        navigate(form, { replace: true })
    }

    const handleLogIn=event=>{
        console.log(event)
        event.preventDefault() 
        const email=event.target.email.value 
        const password=event.target.password.value 

        EmailLoggedIn(email,password)
        .then(res=>{
            console.log(res)
            event.target.reset()
            setLoginVerifyToken(email)
            toast.success('logged in successfully')
        })
        .catch(er=>{})
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleLogIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                <p>if don't have any account <Link className='text-sky-600 underline' to='/register'>Register</Link> Now</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Log In</button>
                            </div>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
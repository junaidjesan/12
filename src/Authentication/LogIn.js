import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/WebContext';
import GoogleLogin from './GoogleLogin';

const LogIn = () => {
    const {EmailCreateUser}=useContext(AuthContext)

    const handleLogIn=event=>{
        event.preventDefault() 
        const email=event.target.email.value 
        const password=event.target.password.value 

        EmailCreateUser(email,password)
        .then(res=>{
            toast.success('logged in successfully')
            event.target.reset()
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
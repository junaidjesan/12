import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/WebContext';
import GoogleLogin from './GoogleLogin';

const Register = () => {
    const { user } = useContext(AuthContext)
    const { EmailCreateUser } = useContext(AuthContext)
    const {updateUserData}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const form = location.state?.from?.pathname || '/'

    const handleRegister = event => {
        event.preventDefault()
        const email = event.target.email.value
        const name = event.target.name.value
        const role = event.target.role.value
        const password = event.target.password.value


        EmailCreateUser(email, password)
            .then(res => {
                const createUserData = {
                    name,
                    email,
                    role
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(createUserData)
                })
                    .then(res => res.json()).then(data => {
                        event.target.reset()
                        updateUserData(name,email)
                        navigate(form, { replace: true })
                        toast.success('user created successfully!!!')
                    })
            })
            .catch(er => { console.log(er) })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <select name='role' className="select w-full">
                                <option disabled selected>You are</option>
                                <option selected>Buyer</option>
                                <option>Seller</option>
                            </select>
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
                                <p>if already have an account <Link className='text-sky-600 underline' to='/logIn'>Log In</Link> Now</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <GoogleLogin></GoogleLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/WebContext';

const Header = () => {
    const {LogOutUser,user}=useContext(AuthContext)

    const handleLogOut=()=>{
        LogOutUser()
        .then(res=>{
            toast.success('log out successfully')
        })
        .catch(er=>{})
    }
    return (
        <div>
            <div className="navbar bg-primary mx-auto md:w-[1480px] px-8">
                <div className="md:navbar-start justify-between">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/categories'>Categoris</Link></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link className='text-2xl text-clip font-semibold' to='/'>BuySell<small>.com</small></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Categories</Link></li>
                        <li tabIndex={0}>
                            <a>
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-10 hidden md:flex">
                    <Link to='/blogs'>Blogs</Link>
                    {
                        user?.uid && <Link to='/dashboard'>Dashboard</Link>
                    }
                    <div className=''>
                        {
                            user? 
                            <>
                            <Link onClick={handleLogOut} to='/'>Log Out</Link>
                            </>
                            :
                            <>
                            <Link to='/logIn'>Log In</Link><br />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
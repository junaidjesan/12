import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/WebContext';
import { FaBook, FaHouseUser } from 'react-icons/fa'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { BiLogOut } from 'react-icons/bi'

const Header = () => {
    const { LogOutUser, user } = useContext(AuthContext)

    const handleLogOut = () => {
        LogOutUser()
            .then(res => {
                console.log(res)
                toast.success('log out successfully')
            })
            .catch(er => { })
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
                            <li><Link to='/dashboard'><FaHouseUser className='lg:h-8 lg:w-8' /> Dashboard</Link></li>
                            <li tabIndex={0}><Link to='/all-products'><MdProductionQuantityLimits /> All Products</Link></li>
                            <li><Link className='' to='/blogs'><FaBook /> Blogs</Link></li>
                            <li>
                                {
                                    user ?
                                        <>
                                            <Link className='items-center flex gap-2' onClick={handleLogOut} to='/'>Log Out <BiLogOut /></Link>
                                        </>
                                        :
                                        <>
                                            <Link to='/logIn'>Log In</Link><br />
                                        </>
                                }
                            </li>
                        </ul>
                    </div>
                    <Link className='text-2xl text-clip font-semibold' to='/'>BuySell<small>.com</small></Link>
                </div>
                <div className="navbar-end gap-10 lg:flex hidden">
                    {
                        !user?.uid && <select name='role' className="select w-24">
                            <option disabled selected>You are</option>
                            <option selected>Buyer</option>
                            <option>Seller</option>
                        </select>
                    }
                    {
                        user?.uid && <Link to='/dashboard'><FaHouseUser className='h-8 w-8' /></Link>
                    }
                    <div className='hidden md:flex'>
                        {
                            user ?
                                <>
                                    <Link className='items-center flex gap-2' onClick={handleLogOut} to='/'>Log Out <BiLogOut /></Link>
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
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../../Authentication/LogIn';
import Register from '../../Authentication/Register';
import Blogs from '../../Components/Blogs/Blogs';
import CategoryProduct from '../../Components/CategoryProduct/CategoryProduct';
import HomePages from '../../Components/HomePages/HomePages';
import AddProducts from '../../DashboardComponents/AddProducts/AddProducts';
import AllByers from '../../DashboardComponents/AllByers/AllByers';
import AllSellers from '../../DashboardComponents/AllSellers/AllSellers';
import FeedbackShow from '../../DashboardComponents/FeedbackShow/FeedbackShow';
import MyByers from '../../DashboardComponents/MyByers/MyByers';
import MyOrders from '../../DashboardComponents/MyOrders/MyOrders';
import MyProducts from '../../DashboardComponents/MyProducts/MyProducts';
import ReportedItems from '../../DashboardComponents/ReportedItems/ReportedItems';
import DeshBoardLayout from '../../Layout/DeshBoardLayout';
import HomeLayout from '../../Layout/HomeLayout/HomeLayout';
import AdminRout from '../AdminRout/AdminRout';
import PrivatRout from '../PrivatRout/PrivatRout';
import Rout404 from '../Rout404/Rout404';
import SellerRout from '../SellerRout/SellerRout';

export const WebRouter=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
                path:'/logIn',
                element:<LogIn></LogIn>
            },
            {
                path:'/',
                element:<HomePages></HomePages>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/category-products/:id',
                element:<PrivatRout><CategoryProduct></CategoryProduct></PrivatRout>,
                loader:({params})=>fetch(`https://assignment-five-beta.vercel.app/category-products/${params.id}`)
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:'*',
        element:<Rout404></Rout404>
    },
    {
        path:'/dashboard',
        element:<DeshBoardLayout></DeshBoardLayout>,
        children:[
            {
                path:'/dashboard/sellers',
                element:<AdminRout><AllSellers></AllSellers></AdminRout>
            },
            {
                path:'/dashboard/byers',
                element:<AdminRout><AllByers></AllByers></AdminRout>
            },
            {
                path:'/dashboard/reported-items',
                element:<AdminRout><ReportedItems></ReportedItems></AdminRout>
            },
            {
                path:'/dashboard/add-products',
                element:<SellerRout><AddProducts></AddProducts></SellerRout>
            },
            {
                path:'/dashboard/my-byers',
                element:<SellerRout><MyByers></MyByers></SellerRout>
            },
            {
                path:'/dashboard/seller-product',
                element:<SellerRout><MyProducts></MyProducts></SellerRout>
            },
            {
                path:'/dashboard/my-orders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/feedback',
                element:<AdminRout><FeedbackShow></FeedbackShow></AdminRout>
            },
        ]
    }
])

const MainRout = () => {
    
    return (
        <div>
            
        </div>
    );
};

export default MainRout;
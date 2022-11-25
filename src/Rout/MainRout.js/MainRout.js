import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../../Authentication/LogIn';
import Register from '../../Authentication/Register';
import Blogs from '../../Components/Blogs/Blogs';
import HomePages from '../../Components/HomePages/HomePages';
import AddProducts from '../../DashboardComponents/AddProducts/AddProducts';
import AllByers from '../../DashboardComponents/AllByers/AllByers';
import AllSellers from '../../DashboardComponents/AllSellers/AllSellers';
import MyByers from '../../DashboardComponents/MyByers/MyByers';
import MyOrders from '../../DashboardComponents/MyOrders/MyOrders';
import MyProducts from '../../DashboardComponents/MyProducts/MyProducts';
import ReportedItems from '../../DashboardComponents/ReportedItems/ReportedItems';
import DeshBoardLayout from '../../Layout/DeshBoardLayout';
import HomeLayout from '../../Layout/HomeLayout/HomeLayout';
import Rout404 from '../Rout404/Rout404';

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
            }
        ]
    },
    {
        path:'/register',
        element:<Register></Register>
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
                path:'/dashboard/add-products',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboard/sellers',
                element:<AllSellers></AllSellers>
            },
            {
                path:'/dashboard/byers',
                element:<AllByers></AllByers>
            },
            {
                path:'/dashboard/reported-items',
                element:<ReportedItems></ReportedItems>
            },
            {
                path:'/dashboard/my-products',
                element:<MyProducts></MyProducts>
            },
            {
                path:'/dashboard/my-orders',
                element:<MyOrders></MyOrders>
            },
            {
                path:'/dashboard/my-byers',
                element:<MyByers></MyByers>
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
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LogIn from '../../Authentication/LogIn';
import Register from '../../Authentication/Register';
import CategorisPages from '../../Components/CategorisPages/CategorisPages';
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
                path:'/categories',
                element:<CategorisPages></CategorisPages>
            }
        ]
    },
    {
        path:'/register',
        element:<Register></Register>
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
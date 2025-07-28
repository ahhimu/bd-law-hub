import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Booking from "../Pages/Booking";
import Blogs from "../Pages/Blogs";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details";
import { FaRocketchat } from "react-icons/fa";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        
        children: [
            {
                path: '/',
                loader: () => fetch('jasonData.json'),
                // element: <Home></Home>
                Component: Home
            },
            {
                path: '/booking',
                loader: () => fetch('/jasonData.json'),
                Component: Booking,
            },
            
            {
                path: '/details/:id',
                loader: () => fetch('jasonData.json'),
                Component: Details,
            },
            {
                path:'/blogs',
                loader: () => fetch('./blogs.json'),
                Component:Blogs,
            }

        ],
        errorElement: <ErrorPage></ErrorPage>,
    }
])

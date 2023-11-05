import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        Element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
])

export default router;
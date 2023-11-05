import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup/Signup";
import AddFood from "../components/pages/AddFood/AddFood";
import PrivateRoutes from "./PrivateRoutes";
//import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Element: <MainLayout></MainLayout>,
        //errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/add',
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
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
]);

export default router;
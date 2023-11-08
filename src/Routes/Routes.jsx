import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../components/pages/Login/Login";
import Signup from "../components/pages/Signup/Signup";
import AddFood from "../components/pages/AddFood/AddFood";
import PrivateRoutes from "./PrivateRoutes";
import AvailableFoods from "../components/pages/AvailableFoods/AvailableFoods";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import FoodRequest from "../components/pages/FoodRequest/FoodRequest";
import FoodTable from "../components/pages/FoodTable/FoodTable";
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
                path: '/available',
                element: <AvailableFoods></AvailableFoods>,
                //loader: ()=>fetch('http://localhost:5000/food')
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ()=> fetch('http://localhost:5000/food')
            },
            {
                path: '/manage',
                element: <FoodTable></FoodTable>,
                loader: ()=>fetch('http://localhost:5000/food')
            },
            {
                path: '/request',
                element: <PrivateRoutes><FoodRequest></FoodRequest></PrivateRoutes>,
                //loader: ()=> fetch('http://localhost:5000/requestFood')
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
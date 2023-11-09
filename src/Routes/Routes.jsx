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
import ErrorPage from "../components/Shared/ErrorPage/ErrorPage";
import UpdateFood from "../components/UpdateFood/UpdateFood";
import SingleReqFood from "../components/pages/SingleReqFood/SingleReqFood";

const router = createBrowserRouter([
    {
        path: "/",
        Element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
                //loader: ()=>fetch('https://food-donation-server-five.vercel.app/food')
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: () => fetch('https://food-donation-server-five.vercel.app/food')
            },
            {
                path: '/manage',
                element: <PrivateRoutes><FoodTable></FoodTable></PrivateRoutes>,
                loader: () => fetch('https://food-donation-server-five.vercel.app/food')
            },
            {
                path: '/updateFood/:id',
                element: <UpdateFood></UpdateFood>,
                loader: ({ params }) => fetch(`https://food-donation-server-five.vercel.app/food/${params.id}`)

            },
            {
                path: '/singleFood/:id',
                element: <PrivateRoutes><SingleReqFood></SingleReqFood></PrivateRoutes>,
                loader: () => fetch('https://food-donation-server-five.vercel.app/food')
            },
            {
                path: '/request',
                element: <PrivateRoutes><FoodRequest></FoodRequest></PrivateRoutes>,
                //loader: ()=> fetch('https://food-donation-server-five.vercel.app/requestFood')
            },
            {
                path: '/login',
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
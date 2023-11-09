//import { useLoaderData } from "react-router-dom";
import FoodItem from "./FoodItem";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Footer from "../../Shared/Footer/Footer";
//import axios from "axios";

const FoodRequest = () => {
    const {user} = useContext(AuthContext);
    //const loadedFoodItems = useLoaderData();
    const [foodItems, setFoodItems] = useState([]);
    console.log(foodItems)
    const url = `https://food-donation-server-five.vercel.app/requestFood?email=${user?.email}`;
   useEffect(()=>{
    fetch(url, {credentials: 'include'})
    .then(res => res.json())
    .then(data=> setFoodItems(data))
   }, [])
    return (
        <>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20 max-w-6xl mx-auto">
            {
                foodItems.map(foodItem=> <FoodItem key={foodItem._id} foodItem={foodItem} foodItems={foodItems} setFoodItems={setFoodItems}></FoodItem> )
               
            }
        </div>
        <Footer></Footer>
        </>
    );
};

export default FoodRequest;
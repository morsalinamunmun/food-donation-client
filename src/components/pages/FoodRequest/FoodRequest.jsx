import { useLoaderData } from "react-router-dom";
import FoodItem from "./FoodItem";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";

const FoodRequest = () => {
    const loadedFoodItems = useLoaderData();
    const [foodItems, setFoodItems] = useState(loadedFoodItems);
    return (
        <>
        <Navbar></Navbar>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20">
            {foodItems?
                foodItems.map(foodItem=> <FoodItem key={foodItem._id} foodItem={foodItem} foodItems={foodItems} setFoodItems={setFoodItems}></FoodItem> ):
                <div>
                    <h2 className="text-2xl text-orange-500 text-center mt-20">No Request Food</h2>
                </div>
            }
        </div>
        </>
    );
};

export default FoodRequest;
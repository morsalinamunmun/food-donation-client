import axios from "axios";
import Food from "../Food/Food";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [showAll, setShowAll] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:5000/food')
    .then(res=>{
        // setFoods(res.data)
        const sortedFoods = res.data.sort((a, b) => b.quantity - a.quantity);
                setFoods(sortedFoods);
    })
    }, [])

    return (
        <div className="max-w-7xl mx-auto py-20">
            <h2 className="mb-10 text-center text-orange-500 font-bold border-2 border-orange-500 w-52 text-2xl flex mx-auto">Available Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {showAll?
                    foods.slice(0, 6).map(food=> <Food key={food._id} food={food}></Food>):
                    foods.map(food=> <Food key={food._id} food={food}></Food>)
                    
                }
            </div>
            <Link to='/available'><button className="flex mx-auto mt-5 text-orange-500 border-2 border-orange-500 rounded-full px-5 py-2">Show All Food</button></Link>
        </div>
        // 
    );
};

export default Foods;
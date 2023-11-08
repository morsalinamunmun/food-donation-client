
import Food from "../../Food/Food";
import Navbar from "../../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

const AvailableFoods = () => {
    const [foods, setFoods] = useState([]);
    console.log(foods)
    const [searchItem, setSearchItem] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/food')
            .then(res => {
                const sortedFoods = res.data
                    .map(food => ({
                        ...food,
                        date: new Date(food.date) // string into a Date object
                    }))
                    .sort((a, b) => a.date - b.date);
                setFoods(sortedFoods);
            })
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero h-52 " style={{ backgroundImage: 'url(https://i.ibb.co/D5kZ40y/close-up-people-holding-apples-bag.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="font-bold text-2xl text-orange-500 mb-5">Search Food</h2>
                        <form className="flex items-center" onChange={(e)=> setSearchItem(e.target.value)}>
                            <input type="text" name="search" id="" placeholder="Search..." className="text-orange-500 py-2 px-3" />
                            {/* <button type="submit" className="bg-orange-500 text-white px-3 py-2 rounded-r">Search</button> */}
                        </form>
                    </div>
                </div>
            </div>
            <h2 className="my-10 text-center text-orange-500 font-bold border-2 border-orange-500 w-52 text-2xl flex mx-auto">Available Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods?.filter(food => food.foodName.toLowerCase().includes(searchItem.toLowerCase())).map(food => <Food key={food._id} food={{ ...food, date: formatDate(food.date) }}></Food>)

                    // 
                }
            </div>
        </div>
    );
};

export default AvailableFoods;
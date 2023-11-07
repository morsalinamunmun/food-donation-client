
import Food from "../../Food/Food";
import Navbar from "../../Shared/Navbar/Navbar";
import AvailableFood from "./AvailableFood";
import { useEffect, useState } from "react";
import axios from "axios";

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

const AvailableFoods = () => {
    const [foods, setFoods] = useState([]);
    console.log(foods)
    //const [searchItem, setSearchItem] = useState('');
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
    const handleSearch = () => {
        // e.preventDefault();
        // const searchValue = (e.target.search.value);
        // setSearchDonation(searchValue);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AvailableFood  handleSearch={handleSearch}></AvailableFood>
            {/*  */}
            <h2 className="my-10 text-center text-orange-500 font-bold border-2 border-orange-500 w-52 text-2xl flex mx-auto">Available Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                 {
                    foods?.map(food => <Food key={food._id} food={{ ...food, date: formatDate(food.date) }}></Food>)

                    // .filter(donation=>donation.item && donation.item.toLowerCase().includes(searchDonation.toLowerCase()))
                }
            </div>
        </div>
    );
};

export default AvailableFoods;
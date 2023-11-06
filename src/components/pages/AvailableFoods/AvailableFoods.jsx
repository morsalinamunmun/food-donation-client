
import Food from "../../Food/Food";
import Navbar from "../../Shared/Navbar/Navbar";
import AvailableFood from "./AvailableFood";
import { useEffect, useState } from "react";
import axios from "axios";

const AvailableFoods = () => {
    const [foods, setFoods] = useState([]);
    console.log(foods)
    //const [searchDonation, setSearchDonation] = useState('');
    //console.log(searchDonation);
    useEffect(()=>{
        axios.get('http://localhost:5000/food')
    .then(res=>{
        // setFoods(res.data)
        const sortedFoods = res.data.sort((a, b) => b.date - a.date);
                setFoods(sortedFoods);
    })
    }, [])
   /*  const handleSearch = e =>{
        e.preventDefault();
        const searchValue = (e.target.search.value);
        setSearchDonation(searchValue);
    } */
    return (
        <div>
            <Navbar></Navbar>
            <AvailableFood ></AvailableFood>  
            {/* handleSearch={handleSearch} */}
             <h2 className="my-10 text-center text-orange-500 font-bold border-2 border-orange-500 w-52 text-2xl flex mx-auto">Available Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods?.map(food => <Food key={food._id} food={food}></Food>)

                    // .filter(donation=>donation.item && donation.item.toLowerCase().includes(searchDonation.toLowerCase()))
                }
            </div>
        </div>
    );
};

export default AvailableFoods;
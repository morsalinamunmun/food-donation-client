import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import ViewDetail from "./ViewDetail";

const ViewDetails = () => {
    const foods = useLoaderData();
    console.log(foods)
    const {id} = useParams();
    console.log(id)
    const food = foods.filter(product=> product._id === (id));
    console.log(food)
    return (
        <div>
            <Navbar></Navbar>
            {
                food.map(viewDetail=> <ViewDetail key={viewDetail.id} viewDetail={viewDetail}></ViewDetail>)
            }
        </div>
    );
};

export default ViewDetails;
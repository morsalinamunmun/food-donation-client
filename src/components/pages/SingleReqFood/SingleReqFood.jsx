import { useState} from "react";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import { useLoaderData, useParams } from "react-router-dom";

const SingleReqFood = () => {
    const foods = useLoaderData();
    const {id} = useParams();
    const [status, setStatus] = useState(foods.status);
    const food = foods.filter(food=> food._id === (id));

    const handleStatusChange = () => {
        // Send a request to update the status to "Delivered"
        fetch(`http://localhost:5000/updateRequestStatus/${food.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "Delivered" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    // Update the status in the component state
                    setStatus("Delivered");
                    Swal.fire({
                        title: "Success",
                        text: "Request status updated to Delivered!",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
            });
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto mt-10">

                {
                    food.map(food =>
                        <div className="" key={food._id}>
                            <h2>Requester Name: {food.name}</h2>
                            <p>Requester Email: {food.email}</p>
                            <p>Request Time and Date: {food.request_date}</p>
                            <p>Status: {food.status}</p>

                            {/* Button to change status to "Delivered" */}
                            {status === "Pending" && (
                                <button onClick={handleStatusChange}>Mark as Delivered</button>
                            )}
                        </div>
                    )
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default SingleReqFood;

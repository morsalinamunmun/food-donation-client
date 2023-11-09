import Swal from "sweetalert2";
import Navbar from "../Shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";

const UpdateFood = () => {
    const foods = useLoaderData();
    const { _id, foodName, status, location, quantity, date, notes, image_url, name, D_email, DImage_url } = foods;
    const handleUpdateFood = e =>{
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const status = form.status.value;
        const name = form.name.value;
        const D_email = form.D_email.value;
        const DImage_url = form.DImage_url.value;
        const location = form.location.value;
        const quantity = form.quantity.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const image_url = form.image_url.value;

        const foodInfo = { foodName, status, location, quantity, date, notes, image_url, name, D_email, DImage_url }

        
        //send form data to server
        fetch(`http://localhost:5000/food/${_id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(foodInfo)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'Product Update successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        }) 
    }
    return (
        <div>
             <Navbar></Navbar>
            <div className="bg-orange-300 p-10 max-w-6xl my-10 mx-auto">
                <h2 className="text-3xl font-extrabold">Update Food</h2>
                <form onSubmit={handleUpdateFood}>
                    <div className="md:flex gap-5">
                        <div className="md:w-1/2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" placeholder="Food Name" defaultValue={foodName} name="foodName" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Status</span>
                                </label>
                                <input type="text" name="status" defaultValue={status} placeholder="Food Status" className="rounded-full border-2 border-orange-500 input input-bordered w-full " required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Your Name" className="rounded-full border-2 border-orange-500 input input-bordered w-full " required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Email</span>
                                </label>
                                <input type="text" name="D_email" defaultValue={D_email} placeholder="Donator Email" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Image</span>
                                </label>
                                <input type="text" name="DImage_url" defaultValue={DImage_url} placeholder="Donar Image Url" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name="location" defaultValue={location} className="rounded-full border-2 border-orange-500 input input-bordered w-full" placeholder="Pickup Location" id="" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="number" name="quantity" defaultValue={quantity} placeholder="Food Quantity" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Expire Date</span>
                                </label>
                                <input type="date" name="date" defaultValue={date} placeholder="Price" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input type="text" name="notes" defaultValue={notes} placeholder="Notes" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="text" name="image_url" defaultValue={image_url} placeholder="Image Url" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Update Food" className=" mt-10 btn btn-block bg-orange-500 text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;
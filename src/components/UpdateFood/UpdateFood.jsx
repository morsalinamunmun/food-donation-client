import Navbar from "../Shared/Navbar/Navbar";

const UpdateFood = () => {
    return (
        <div>
             <Navbar></Navbar>
            <div className="bg-orange-300 p-10 max-w-6xl mx-auto">
                <h2 className="text-3xl font-extrabold">Add Food</h2>
                <form >
                    <div className="md:flex gap-5">
                        <div className="md:w-1/2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" placeholder="Food Name" name="foodName" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Status</span>
                                </label>
                                <input type="text" name="status" placeholder="Food Status" className="rounded-full border-2 border-orange-500 input input-bordered w-full " required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="rounded-full border-2 border-orange-500 input input-bordered w-full " required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Email</span>
                                </label>
                                <input type="text" name="D_email" placeholder="Donator Email" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Donator Image</span>
                                </label>
                                <input type="text" name="DImage_url" placeholder="Donar Image Url" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" name="location" className="rounded-full border-2 border-orange-500 input input-bordered w-full" placeholder="Pickup Location" id="" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="number" name="quantity" placeholder="Food Quantity" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Expire Date</span>
                                </label>
                                <input type="date" name="date" placeholder="Price" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input type="text" name="notes" placeholder="Notes" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="text" name="image_url" placeholder="Image Url" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Add Food" className=" mt-10 btn btn-block bg-orange-500 text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;
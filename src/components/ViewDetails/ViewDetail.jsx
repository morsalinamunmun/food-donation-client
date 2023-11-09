import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetail = ({ viewDetail }) => {
    const {user} = useContext(AuthContext);

    const { _id, image_url, foodName, date, notes, name, location, quantity, D_email } = viewDetail;
    const handleRequest = e => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const id = form.id.value;
        const name = form.name.value;
        const D_email = form.D_email.value;
        const location = form.location.value;
        const request_date = form.request_date.value;
        const date = form.date.value;
        const notes = form.notes.value;
        const money = form.money.value;
        const email = user?.email;
        const image_url = form.image_url.value;

        const requestInfo = { foodName, id, location, quantity, request_date, date, notes, image_url, name, money, D_email, email}

        //send form data to server
        fetch('https://food-donation-server-five.vercel.app/requestFood', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(requestInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Request successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div className="flex max-w-4xl mx-auto mt-10">
            <div className="">
                <img className="w-96" src={image_url} alt="" />
                <div className="flex gap-20 py-5">
                    <h2 className="text-2xl font-bold text-blue-800">{foodName}</h2>
                    <p className=""><span>Expire: </span>{date}</p>
                </div>
                <span className="font-bold">Available: </span><p className="badge badge-secondary">{quantity}</p>
                <p>{notes}</p>
                {/* <button onClick={handleRequest} className="my-5 text-white bg-orange-500 rounded-full px-3 py-2">Food Request</button> */}
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="my-5 text-white bg-orange-500 rounded-full px-3 py-2" onClick={() => document.getElementById('my_modal_4').showModal()}>Food Request</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="bg-orange-300 p-10">
                            <h2 className="text-3xl font-extrabold">Add Food</h2>
                            <form onSubmit={handleRequest}>
                                <div className="md:flex gap-5">
                                    <div className="md:w-1/2">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Food Name</span>
                                            </label>
                                            <input type="text" placeholder="Food Name" defaultValue={foodName} name="foodName" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required readOnly />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Food Id</span>
                                            </label>
                                            <input type="text" name="id" defaultValue={_id} placeholder="Food Id" className="rounded-full border-2 border-orange-500 input input-bordered w-full " required readOnly />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Donator Name</span>
                                            </label>
                                            <input type="text" name="name" defaultValue={name} placeholder="Donar Name" className="rounded-full border-2 border-orange-500 input input-bordered w-full " required readOnly />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Donator Email</span>
                                            </label>
                                            <input type="text" name="D_email" defaultValue={D_email} placeholder="Donator Email" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required readOnly />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">User Email</span>
                                            </label>
                                            <input type="text" name="email" defaultValue={user?.email} placeholder="User Email" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required readOnly />
                                        </div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Location</span>
                                            </label>
                                            <input type="text" name="location" defaultValue={location} className="rounded-full border-2 border-orange-500 input input-bordered w-full" placeholder="Pickup Location" id=""required readOnly />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Request Date</span>
                                            </label>
                                            <input type="date" name="request_date" placeholder="Request Date" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required  />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Pickup Date</span>
                                            </label>
                                            <input type="date" name="date" defaultValue={date} placeholder="Date" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required readOnly />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Additional Notes</span>
                                            </label>
                                            <input type="text" name="notes" placeholder="Notes" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required  />
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text">Food Image</span>
                                            </label>
                                            <input type="text" name="image_url" defaultValue={image_url} placeholder="Image Url" className="rounded-full border-2 border-orange-500 input input-bordered w-full" required readOnly />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Donation Money</span>
                                    </label>
                                    <input type="number" name="money" placeholder="Donation  money" className="rounded-full border-2 border-orange-500 input input-bordered w-full" />
                                </div>
                                <input type="submit" value="Request Send" className=" mt-10 btn btn-block bg-orange-500 text-white" />
                            </form>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button, it will close the modal */}
                                <button className="rounded-full border-2 border-orange-500 text-orange-500 px-5 py-2">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <div className="space-y-5">
                <h2 className="text-orange-500 font-bold text-2xl">Food Donator Information</h2>
                <p><span className="font-semibold text-xl">Name: </span>{name}</p>
                <p><span className="font-semibold text-xl">Location: </span>{location}</p>
            </div>
        </div>
    );
};

export default ViewDetail;
import Swal from "sweetalert2";

const FoodItem = ({ foodItem, setFoodItems, foodItems }) => {
    const { _id, date, location, name, image_url, request_date, money } = foodItem;

    const handleCancel = (_id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/requestFood/${_id}`, {
                method: "DELETE"
              })
              .then(res=> res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Request has been Cancel.',
                        'success'
                    )   
                    const remaining = foodItems.filter(deleteCart=> deleteCart.id !== _id)
                    setFoodItems(remaining); 
                }
              })
            }
          })
    }
    return (
        <div className="card w-96 bg-orange-100 shadow-xl rounded">
            <figure className="px-10 pt-10">
                <img src={image_url} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Donar Name: {name}</h2>
                <p><span className="font-bold">Location: </span>{location}</p>
                <p><span className="font-bold">Expire Date: </span>{date}</p>
                <p><span className="font-bold">Request Date: </span>{request_date}</p>
                <p><span className="font-bold">Donation Amount: </span>{money}</p>
                <div className="card-actions">
                    <button onClick={()=>handleCancel(_id)} className="btn rounded-full bg-orange-500 text-white normal-case">Cancel Request</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
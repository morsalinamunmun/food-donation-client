
const FoodItem = ({ foodItem }) => {
    const { date, location, name, image_url, request_date, money } = foodItem;
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
                    <button className="btn rounded-full bg-orange-500 text-white normal-case">Cancel Request</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
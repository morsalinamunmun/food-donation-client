
const Food = ({ food }) => {
    const { image_url, quantity, foodName, DImage_url, name, location, date, notes } = food;
    return (
        <div className="card rounded card-compact bg-base-100 shadow-xl">
            <figure className=""><img className="" src={image_url} alt="food" />
            </figure>
            <div className="card-body">
                <div className="flex items-center">
                <h2 className="card-title text-3xl">{foodName}</h2>
                <p><span className="font-bold text-orange-500 ml-32 ">Expire: </span>{date}</p>
                </div>
                <div className="flex items-center gap-5">
                    <img className="w-14 rounded-full" src={DImage_url} alt="" />
                    <p className="font-semibold">{name}</p>
                    <div className="badge badge-secondary">Quantity: {quantity}</div>
                </div>
                <p>{notes}</p>
                <p><span className="text-orange-500">Location:</span> {location}</p>
                <div className="card-actions justify-end">
                    <button className="text-orange-500 underline text-xl font-semibold">view Details</button>
                </div>
            </div>
        </div>
    );
};

export default Food;

const ViewDetail = ({viewDetail}) => {
    const {image_url, foodName, date, notes, name, location, quantity} = viewDetail;
    const handleRequest = ()=>{

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
                <button onClick={handleRequest} className="my-5 text-white bg-orange-500 rounded-full px-3 py-2">Food Request</button>
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
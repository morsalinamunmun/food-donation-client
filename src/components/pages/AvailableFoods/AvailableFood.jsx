
const AvailableFood = ({handleSearch}) => {
    return (
        <div className="hero h-52 " style={{ backgroundImage: 'url(https://i.ibb.co/D5kZ40y/close-up-people-holding-apples-bag.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className="font-bold text-2xl text-orange-500 mb-5">Search Food</h2>
                    <form className="flex items-center" onSubmit={handleSearch}>
                        <input type="text" name="search" id="" placeholder="Search..." className="py-2 px-3" />
                        <button type="submit" className="bg-orange-500 text-white px-3 py-2 rounded-r">Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AvailableFood;
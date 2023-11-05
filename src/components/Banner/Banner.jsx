
const Banner = () => {
    return (
        <div className="carousel h-screen w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/D5kZ40y/close-up-people-holding-apples-bag.jpg" className="w-full" />
                <div className="absolute flex items-center hero-overlay bg-opacity-60 ">
                    <div className="flex mx-auto max-w-lg">
                        <div className='text-white text-center space-y-7 pl-20 '>
                            <h2 className='text-5xl font-bold'>Help Us Feed the Hungry: Join Our Food Donation Drive Today!</h2>
                            <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="flex mx-auto btn border-2 bg-orange-500 rounded-full  normal-case">Food Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/X8q3N8M/volunteers-collecting-food-donations-close-up.jpg" className="w-full" />
                <div className="absolute flex items-center hero-overlay bg-opacity-60 ">
                    <div className="flex mx-auto max-w-lg">
                        <div className='text-white text-center space-y-7 pl-20 '>
                            <h2 className='text-5xl font-bold'>Join Our Food Donation Team and Make a Difference in Your Community!</h2>
                            <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="flex mx-auto btn border-2 bg-orange-500 rounded-full  normal-case">Food Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/5kSxLY5/flat-lay-bunch-fresh-provisions-donation.jpg" className="w-full" />
                <div className="absolute flex items-center hero-overlay bg-opacity-60 ">
                    <div className="flex mx-auto max-w-lg">
                        <div className='text-white text-center space-y-7 pl-20 '>
                            <h2 className='text-5xl font-bold'>Help Us Feed the Hungry: Join Our Food Donation Drive Today!</h2>
                            <p>There are many variations of passages of available, but the majority have suffered alteration in some form</p>
                            <div className=''>
                                <button className="flex mx-auto btn border-2 bg-orange-500 rounded-full  normal-case">Food Update</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
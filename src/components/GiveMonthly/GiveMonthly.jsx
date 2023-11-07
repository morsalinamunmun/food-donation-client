import {MdOutlineCalendarMonth} from 'react-icons/md';
import {GiVendingMachine} from 'react-icons/gi';
import {BiDonateBlood} from 'react-icons/bi';
const GiveMonthly = () => {
    return (
        <div className='grid grid-cols-3 max-w-3xl mx-auto my-10'>
            <div className='text-center space-y-5'>
                <div className='flex ml-28 bg-orange-500 rounded-full w-14 p-5'><GiVendingMachine></GiVendingMachine></div>
                <p>Give Now</p>
                <p>Take acton by making a food donation to invisible.</p>
                <button className='bg-orange-500 rounded-full px-5 py-2 text-white'>Make Donation</button>
            </div>
            <div className='text-center space-y-5'>
                <div className='flex ml-28 bg-orange-500 rounded-full w-14 p-5'><MdOutlineCalendarMonth></MdOutlineCalendarMonth></div>
                <p>Give Monthly</p>
                <p>Donate to invisible monthly basis and become a forth estate member</p>
                <button className='bg-orange-500 rounded-full px-5 py-2 text-white'>Give Monthly</button>
            </div>
            <div className='text-center space-y-5'>
                <div className='flex ml-28 bg-orange-500 rounded-full w-14 p-5'><BiDonateBlood></BiDonateBlood></div>
                <p>Taking Donation</p>
                <p>Taking food available all items Now! Give benefit</p>
                <button className='bg-orange-500 rounded-full px-5 py-2 text-white'>Take Benefit</button>
            </div>
        </div>
    );
};

export default GiveMonthly;
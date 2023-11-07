import Banner from "../../Banner/Banner";
import Community from "../../Community/Community";
import Foods from "../../Foods/Foods";
import GiveMonthly from "../../GiveMonthly/GiveMonthly";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
             <Navbar></Navbar>
             <Banner></Banner>
             <Foods></Foods>
             <GiveMonthly></GiveMonthly>
             <Community></Community>
             <Footer></Footer>
        </div>
    );
};

export default Home;

import Banner from "../../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
             <Navbar></Navbar>
             <Banner></Banner>
             <Footer></Footer>
        </div>
    );
};

export default Home;

import { Link } from "react-router-dom";
import error from '../../../assets/images/not-fount.png'
const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 py-16">
            <h2 className="text-2xl font-bold ">Oops!!! This page Not Available</h2>
            <img className="flex mx-auto" src={error} alt="" />
            <Link to="/" className="text-sky-500 underline">go Back to home</Link>
        </div>
    );
};

export default ErrorPage;
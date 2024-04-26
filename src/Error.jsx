import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center mt-48 mx-auto">
         <h1 className="mb-12 text-stone-800 text-5xl font-bold">404 Not Found</h1>
            <Link to="/">
            <button className="btn btn-ghost  text-white font-medium bg-[#A79277] text-lg">Go to Home Page</button>
            </Link>
        </div>
    );
};

export default Error;
import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from 'react-toastify';
const Root = () => {
    return (
        <>
        <div className="mx-auto max-w-7xl font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
         <Footer></Footer>
         <ToastContainer />
         </>
    );
};

export default Root;
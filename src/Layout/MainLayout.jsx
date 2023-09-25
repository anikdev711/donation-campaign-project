import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home/Home";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>

            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
            </div>

            <div className="max-w-6xl mx-auto">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default MainLayout;
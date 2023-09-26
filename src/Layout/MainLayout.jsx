import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home/Home";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>

            <div className="lg:max-w-7xl mx-auto">
                <Navbar></Navbar>
            </div>

            <div className="lg:max-w-7xl mx-auto">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default MainLayout;
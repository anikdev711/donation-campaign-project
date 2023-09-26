import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home/Home";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>

            <div className="">
                <Navbar></Navbar>
            </div>

            <div className="">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default MainLayout;
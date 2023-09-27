import { Outlet } from "react-router-dom";
// import Home from "../Pages/Home/Home";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>

            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default MainLayout;
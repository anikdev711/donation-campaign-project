// import Header from "../../components/Header/Header";

import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../../components/Donations/Donations";
// import DonationsCard from "../../components/Donations/DonationsCard";


const Home = () => {
    const donations = useLoaderData();
    // console.log(donations);
    return (
        <div className="">
            <Banner></Banner>
            <Donations donations={donations}></Donations>

        </div>
    );
};

export default Home;
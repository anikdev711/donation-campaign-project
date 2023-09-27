// import Navbar from "../Navbar/Navbar";
// import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import DonationsCard from "../../Donations/DonationsCard";
// import { Vortex } from "react-loader-spinner";
// import Donations from "../../Donations/Donations";
// import SearchDonations from "../../Donations/SearchDonations";
// import { Link } from "react-router-dom";


const Banner = () => {
    // const loadData = useLoaderData();
    // console.log(loadData);
    const [inputSearchData, setInputSearchData] = useState('');
    const [matchCategory, setMatchCategory] = useState('');
    const [isDisplayClass, setIsDisplayClass] = useState(true);
    
    const displayClass = () => {
        setIsDisplayClass(!isDisplayClass);
    }

    const handleInputSearchData = e => {
        e.preventDefault();
        setInputSearchData(e.target.value);

    };

    const handleInputSubmitData = e => {
        e.preventDefault();
        // console.log(`Search value: ${inputSearchData}`);
        // console.log(`${inputSearchData}`);
        setMatchCategory(`${inputSearchData}`);
    }

    const handleLoadData = () => {
        window.location.reload();
    }

    // console.log(matchCategory);

    return (
        <div>
            <div className="bg-no-repeat hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dp6HZzx/donationbannerimage.jpg)' }}>
                <div className="hero-overlay bg-gradient-to-r from-slate-50	 to-transparent bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>

                        <form onSubmit={handleInputSubmitData}>
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder="Search here...."
                                value={inputSearchData}
                                onChange={handleInputSearchData}
                                className="p-2 mt-10 text-black font-bold rounded-lg" />
                    
                            <button onClick={displayClass}
                                type="submit"
                                className="bg-[#FF444A] text-white font-bold p-2 rounded-lg"
                            >Search</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={isDisplayClass ? 'hidden' : ''}>
                <div>
                    <button
                        onClick={handleLoadData}
                        type="button" className="text-black hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-extrabold rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Clear Categories</button>
                </div>
                
                {<DonationsCard matchCategory={matchCategory}></DonationsCard>}

            </div>

        </div>
    );
};

export default Banner;
// import Navbar from "../Navbar/Navbar";

import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
import DonationsCard from "../../Donations/DonationsCard";
// import Donations from "../../Donations/Donations";
// import SearchDonations from "../../Donations/SearchDonations";
// import { Link } from "react-router-dom";


const Banner = () => {
    // const loadData = useLoaderData();
    // console.log(loadData);
    const [inputSearchData, setInputSearchData] = useState('');
    const [matchCategory, setMatchCategory] = useState('');
    const [isDisplayClass, setIsDisplayClass] = useState(true);

    const displayClass = () =>{
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
    // console.log(matchCategory);

    return (
        <div>
            <div className="bg-no-repeat hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/LRxgZj2/donationcover.png)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
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
                            className="p-2 mt-10 text-black font-bold" />
                        {/* <input type="submit" value="Search" className="bg-[#FF444A] p-4 text-white rounded-lg" /> */}
                        <button onClick={displayClass}
                            type="submit"
                            className="bg-[#FF444A] text-white font-bold p-2 rounded-lg"
                        >Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* <h1>Search Result</h1> */}

            <div className={isDisplayClass ? 'hidden' : ''}>
                {/* {<SearchDonations matchCategory={matchCategory}></SearchDonations>} */}

                {/* {<Donations matchCategory={matchCategory}></Donations>} */}

                {<DonationsCard matchCategory={matchCategory}></DonationsCard>}

            </div>

        </div>
    );
};

export default Banner;
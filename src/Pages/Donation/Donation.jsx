import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [myDonation, setMyDonation] = useState([]);
    const [noDataFound, setNoDataFound] = useState(false);
    const [isDataShow, setIsDataShow] = useState(false);
    // const [totalDonation, setTotalDonation] = useState(0);

    useEffect(() => {
        const getDataFromLs = JSON.parse(localStorage.getItem("applied-donation"));
        if (getDataFromLs) {
            // console.log(getDataFromLs);
            setMyDonation(getDataFromLs);
        }
        else {
            setNoDataFound('No data found');
        }
    }, []);

    const handleRemoveDonations = () => {
        localStorage.clear();
        setMyDonation([]);
        setNoDataFound('No data found');
    }

    return (
        <div>

            {
                noDataFound ? <p className="h-[80vh] flex justify-center items-center">{noDataFound}</p>
                    : <div>
                        {
                            myDonation.length > 0 && <div>
                                <button
                                onClick={handleRemoveDonations}
                                 className="bg-[#009444] mx-auto block font-bold text-white p-3 rounded-lg mt-8">Delete all donations</button>
                            </div>
                        }
                    </div>
            }

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-20 mb-16">
                {
                    isDataShow ? myDonation.map(appliedDonations =>
                        <DonationCard key={appliedDonations.id} appliedDonations={appliedDonations}></DonationCard>)
                        : myDonation.slice(0, 4).map(appliedDonations => <DonationCard key={appliedDonations.id} appliedDonations={appliedDonations}></DonationCard>)
                }
            </div>

            {
                myDonation.length > 4 && <button onClick={() => setIsDataShow(!isDataShow)} className="bg-[#009444] text-white font-bold p-3 rounded-lg mx-auto block mt-10 mb-36">
                    {isDataShow ? "Show Less" : "Show All"}
                </button>
            }

        </div>
    );
};

export default Donation;
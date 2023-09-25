import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";


const DonationDetails = () => {
    const [donationDetails, setDonationDetails] = useState({});
    const {id} = useParams();

    const idInt = parseInt(id);

    // console.log(idInt);
    const donations = useLoaderData();
    // console.log(donations);

    useEffect(()=>{
        const  findDonationDetails = donations.find((donation) => donation.id === idInt);
        // console.log(findDonationDetails);
        setDonationDetails(findDonationDetails);

    }, [idInt, donations])

    // console.log(donationDetails);

    return (
        <div>
            <DonationDetailsCard donationDetails={donationDetails}></DonationDetailsCard>
        </div>
    );
};

export default DonationDetails;
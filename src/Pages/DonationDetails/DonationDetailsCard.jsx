/* eslint-disable react/prop-types */

// import { useState } from "react";

// import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { DonationCategories } from '../../components/Donations/DonationsCard';


const DonationDetailsCard = ({ donationDetails }) => {
    // console.log(donationDetails);
    // console.log(displayCategoryDonations);

    const { id, image, title, button_bg, description, price } = donationDetails || {};

    // const displayCategoryDonations = useContext(DonationCategories);
    // console.log(displayCategoryDonations);


    const handleAppliedDonation = () => {

        const getMyAppliedDonation = JSON.parse(localStorage.getItem("applied-donation"));

        const addToDonationStorage = [];

        if (!getMyAppliedDonation) {
            addToDonationStorage.push(donationDetails);
            localStorage.setItem("applied-donation", JSON.stringify(addToDonationStorage));
            toast.success('Successfully applied the donation. Thank you.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        else {
            const isExistDonationInLS = getMyAppliedDonation.find(item => item.id === parseInt(id));

            if (!isExistDonationInLS) {
                addToDonationStorage.push(...getMyAppliedDonation, donationDetails);
                localStorage.setItem("applied-donation", JSON.stringify(addToDonationStorage));
                toast.success('Donation added, Thank you', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else{
                toast.error('You have already donated', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }



    }

    return (
        <div>
            {/* <h1>{displayCategoryDonations}</h1> */}
            {/* Donation details blog starts  */}
            <div key={id} className="relative flex max-w-6xl mx-auto flex-col bg-white shadow-md mt-8 mb-28">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={image}
                        alt=""
                        className="w-full"
                    />
                    <div style={{ backgroundColor: "rgba(11, 11, 11, 0.70)", padding: "12px" }}>
                        <button onClick={handleAppliedDonation}
                            style={{ backgroundColor: button_bg }}
                            className="p-2 text-white rounded-lg">
                            Donate ${price}
                        </button>
                    </div>
                </div>
                <div className="p-6 mt-14">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                        {description}
                    </p>
                </div>
            </div>
            {/* Donation details blog ends */}
            <ToastContainer />
        </div>
    );
};

export default DonationDetailsCard;
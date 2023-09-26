/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
// import swal from 'sweetalert';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import SearchDonation from "./SearchDonation";
// import DonationDetails from "../../Pages/DonationDetails/DonationDetails";
// import DonationDetailsCard from "../../Pages/DonationDetails/DonationDetailsCard";
// import DonationDetailsCard from "../../Pages/DonationDetails/DonationDetailsCard";
// export const DonationCategories = createContext('displayCategoryDonations');

const DonationsCard = ({ donation, matchCategory }) => {
    const allDonations = useLoaderData();
    // console.log(allDonations);
    const { id, image, category, title, category_bg, card_bg, text_color } = donation || {};

    const [displayCategoryDonations, setDisplayCategoryDonations] = useState([]);

    useEffect(() => {
        if (matchCategory === "Health") {
            // console.log('matched');
            const healthDonations = allDonations.filter(item => item.category === "Health");
            // console.log(healthDonations);
            setDisplayCategoryDonations(healthDonations);
            // console.log(displayCategoryDonations);
        }
        else if (matchCategory === "Education") {
            const educationDonations = allDonations.filter(item => item.category === "Education");
            setDisplayCategoryDonations(educationDonations);
            // console.log(educationDonations);
        }
        else if (matchCategory === "Clothing") {
            const clothingDonations = allDonations.filter(item => item.category === "Clothing");
            // console.log(foodDonations);
            setDisplayCategoryDonations(clothingDonations);
        }
        else if (matchCategory === "Food") {
            const foodDonations = allDonations.filter(item => item.category === "Food");
            // console.log(clothingDonations);
            setDisplayCategoryDonations(foodDonations);
        }
        // else if (matchCategory !== 'health' || matchCategory !== 'education' || matchCategory !== 'food' || matchCategory !== 'clothing') {
            // console.log('not matched');

            // swal("Sorry!", "No data found!", "error");

            // toast.error('Search category not matched.Tips: All letters are small', {
            // position: "top-right",
            // autoClose: 5000,
            // hideProgressBar: false,
            // closeOnClick: true,
            // pauseOnHover: true,
            // draggable: true,
            // progress: undefined,
            // theme: "light",
            // });

        // }
        else{
            console.log('No data found');
        }
    }, [matchCategory, allDonations])

    // console.log(displayCategoryDonations);

    return (
        <div>
            <div>
                <Link to={`/donationdetails/${id}`}>
                    <div className="w-72 ml-16 md:ml-10 lg:ml-1 border rounded-lg shadow" style={{ backgroundColor: card_bg }}>
                        <img className="rounded-t-lg" src={image} alt="" />
                        <div className="p-5">
                            <button style={{ color: text_color, backgroundColor: category_bg, paddingLeft: "12px", paddingRight: "12px", borderRadius: "8px" }}>{category}</button>
                            <h5 className="mb-2 text-xl font-bold" style={{ color: text_color }}>{title}</h5>
                        </div>
                    </div>
                </Link>
            </div>

            {/* matched category starts  */}

            <div className="lg:max-w-6xl lg:mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {
                        displayCategoryDonations.map(matter =>

                            <div key={matter.id}>
                                <Link to={`/donationdetails/${matter.id}`}>
                                    <div className="w-72 ml-16 md:ml-10 lg:ml-8 border rounded-lg shadow" style={{ backgroundColor: matter.card_bg }}>
                                        <img className="rounded-t-lg" src={matter.image} alt="" />
                                        <div className="p-5">
                                            <button style={{ color: matter.text_color, backgroundColor: matter.category_bg, paddingLeft: "12px", paddingRight: "12px", borderRadius: "8px" }}>{matter.category}</button>
                                            <h5 className="mb-2 text-xl font-bold" style={{ color: matter.text_color }}>{matter.title}</h5>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                </div>

            </div>
            {/* matched category ends  */}

            {/* <ToastContainer /> */}

        </div>
    );
};

export default DonationsCard;
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const DonationCard = ({ appliedDonations }) => {
    // console.log(appliedDonations);
    const { id, image, category, title, category_bg, card_bg, text_color, button_bg, price } = appliedDonations || {};

    return (
        <div>
            <div
                style={{ backgroundColor: card_bg }}
                className="relative flex w-96 lg:w-auto flex-row rounded-xl shadow-md ml-5 md:ml-48 lg:ml-2 ">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">

                    <button
                        style={{ color: text_color, backgroundColor: category_bg, paddingLeft: "12px", paddingRight: "12px", borderRadius: "8px" }}
                        className="text-sm font-normal">{category}</button>

                    <h4
                        className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p
                        style={{ color: text_color }}
                        className="mb-8 block font-sans font-semibold text-xl leading-relaxed antialiased">
                        ${price}
                    </p>
                    <Link to={`/donationdetails/${id}`}>

                        <button
                            style={{ backgroundColor: button_bg }}
                            className="text-white text-lg font-semibold p-4 rounded-lg">
                            View Details
                        </button>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;
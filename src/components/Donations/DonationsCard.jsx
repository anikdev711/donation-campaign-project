/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const DonationsCard = ({ donation }) => {
    const { id, image, category, title, category_bg, card_bg, text_color } = donation || {};
    // console.log(card_bg, text_color);
    // console.log(donation);
    return (
        <div>
            <Link to={`/donationdetails/${id}`}>

                <div className="max-w-sm border rounded-lg shadow" style={{ backgroundColor: card_bg }}>

                    <img className="rounded-t-lg" src={image} alt="" />

                    <div className="p-5">

                        <button style={{ color: text_color, backgroundColor: category_bg, paddingLeft: "12px", paddingRight: "12px", borderRadius: "8px" }}>{category}</button>

                        <h5 className="mb-2 text-xl font-bold" style={{ color: text_color }}>{title}</h5>

                    </div>

                </div>

            </Link>
        </div>
    );
};

export default DonationsCard;
/* eslint-disable react/prop-types */


const DonationDetailsCard = ({ donationDetails }) => {
    // console.log(donationDetails);

    const { id, image, title, button_bg, description, price } = donationDetails || {};


    return (
        <div>
            {/* Donation details blog starts  */}
            <div key={id} className="relative flex max-w-7xl flex-col bg-white shadow-md mt-8 mb-28">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={image}
                        alt=""
                        className="w-full"
                    />
                    <div style={{backgroundColor: "rgba(11, 11, 11, 0.70)", padding: "12px"}}>
                        <button
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
        </div>
    );
};

export default DonationDetailsCard;
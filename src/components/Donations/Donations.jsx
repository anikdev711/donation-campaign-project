/* eslint-disable react/prop-types */
import DonationsCard from "./DonationsCard";

const Donations = ({donations}) => {
    // console.log(donations);
    return (
        <div className="lg:max-w-6xl mx-auto">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-24 mb-44">
                {
                    donations?.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                }
            </div>
        </div>
    );
};

export default Donations;
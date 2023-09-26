import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
// import { Pie } from 'react-chartjs-2';
// import { data } from "autoprefixer";



const Statistics = () => {
    // const {id} = useParams();
    // const idInt = parseInt(id);
    // console.log(id);
    const myDonationStatistics = useLoaderData();
    // console.log(myDonationStatistics);

    const [totalDonationPrice, setTotalDonationPrice] = useState(0);
    const [appliedDonationPrice, setAppliedDonationPrice] = useState(0);
    // const [pieData, setPieData] = useState([]);
    const [myDonation, setMyDonation] = useState(0);
    const [othersDonation, setOthersDonation] = useState(0);

    useEffect(() => {
        let donationTotal = myDonationStatistics.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);

        setTotalDonationPrice(donationTotal);
        // console.log(totalDonationPrice);
        // console.log(donationTotal);

        const totalPercentage = 100;
        // const donationData = [];

        const getStoredDonationFromLs = JSON.parse(localStorage.getItem("applied-donation"));
        if (getStoredDonationFromLs) {
            // console.log(getStoredDonationFromLs);
            let appliedDonationTotal = getStoredDonationFromLs.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);
            // console.log(appliedDonationTotal);
            setAppliedDonationPrice(appliedDonationTotal);
            // console.log(appliedDonationPrice);
        }
        else {
            console.log('no data found');
        }

        const myDonationPercentage = ((appliedDonationPrice / totalDonationPrice) * totalPercentage);
        
        const othersDonationPercentage = (totalPercentage - myDonationPercentage);
        
        setMyDonation(myDonationPercentage);
        setOthersDonation(othersDonationPercentage);
        
    }, [myDonationStatistics, appliedDonationPrice, totalDonationPrice])

    // console.log(myDonation, othersDonation);

    const donationData = [
        {
            "name": "My Donation",
            "value": myDonation,
            "color": "#00C49F"
        },
        {
            "name": "Total Donation",
            "value": othersDonation,
            "color": "#FF444A"
        }
    ];

    return (
        <div className="-ml-40 md:-ml-40 lg:ml-60">

            <PieChart width={730} height={400}>

                <Pie
                    data={donationData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    fill="#00C49F"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                >
                    {
                        donationData.map((entry, index) => (<Cell key={index} fill={entry.color} />))
                    }

                </Pie>

                <Tooltip></Tooltip>
                <Legend></Legend>



            </PieChart>

        </div>
    );
};

export default Statistics;
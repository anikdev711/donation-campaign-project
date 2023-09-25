// import Navbar from "../Navbar/Navbar";


const Banner = () => {
    return (
        <div>
            <div className="bg-no-repeat hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/LRxgZj2/donationcover.png)' }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
                        <input type="text" name="" id="" placeholder="Search here...." className="p-4 mt-10"/>
                        <input type="submit" value="Search" className="bg-[#FF444A] p-4 text-white rounded-lg"/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
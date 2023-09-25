

const Logo = () => {
    return (
        <div className="flex gap-4">
            <div>
                <img src="/public/logo.png" alt="" />
            </div>
            <div>
                <img src="/public/donation.png" alt="" />
                <br />
                <img src="/public/campaign.png" alt="" />
            </div>
        </div>
    );
};

export default Logo;
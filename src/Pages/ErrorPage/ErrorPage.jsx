import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <h3>404</h3>
                <p>Not found</p>
            </div>
            <div className="flex justify-center items-center h-screen">
                <Link to="/">
                    <button>Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
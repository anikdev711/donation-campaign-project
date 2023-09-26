import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="text-center mt-40">
                <h1 className="text-red-600 font-extrabold text-6xl">Page Not Found</h1>
                <h3 className="text-orange-400 font-bold text-4xl mt-8 mb-8">404 <span className="text-xl font-medium text-black">error</span></h3>
            </div>
            <div className="flex justify-center items-center">
                <Link to="/">
                    <button type="button" className="text-black hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-extrabold rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
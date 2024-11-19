import { Link } from "react-router-dom";
import { assets } from "../assets/asset";




const NotFoundPage = () => {
  return (
    <div className="justify-center flex flex-col items-center">
      <img
        src={assets.not_found}
        className="w-full h-full mt-10"
        alt="404 page"
      />
      <h1 className="font-semibold text-3xl">Oops! Page not found</h1>
      <p className="text-center text-lg mb-8 text-gray-700">
        The page you are looking for might have been removed or temporarily
        unavailable.{" "}
      </p>

      <Link to="/">
        <button className=" bg-blue-500 p-4 rounded-md font-medium text-lg">
          {" "}
          Back To HomePage
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

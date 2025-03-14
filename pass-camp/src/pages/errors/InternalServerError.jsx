import { Link } from "react-router-dom";
import GoHomeButton from "../../components/GoHomeButton";

const InternalServerError = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600 mb-4">500</h1>
      <p className="text-xl mb-6">
        Something went wrong on our end. Please try again later.
      </p>
      <p>
        {message}
      </p>
      <GoHomeButton />
    </div>
  );
};

export default InternalServerError;

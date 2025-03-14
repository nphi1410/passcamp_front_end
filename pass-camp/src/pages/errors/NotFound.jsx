import { Link } from "react-router-dom";
import GoHomeButton from "../../components/GoHomeButton";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <GoHomeButton />
    </div>
  );
};

export default NotFound;

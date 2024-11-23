import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
import bgimg from "../../src/assets/img/veda-bot-bg.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-green-900" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <h1 className="text-5xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-8 font-bold">
        Oops! The page you are looking for might be in another galaxy.
      </p>
      <FaExclamationTriangle className="text-yellow-500 text-9xl mb-8" />
      <Link to="/" className="text-green-900 hover:underline font-bold">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;

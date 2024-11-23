import { Link, useLocation } from "react-router-dom";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { RiHealthBookFill } from "react-icons/ri";
import { FaUserDoctor } from "react-icons/fa6";
import { TbCheckupList } from "react-icons/tb";

const Nav = () => {
  const navLinks = [
    {
      to: "https://vedabot-ayurved.streamlit.app/",
      name: "Chat with our bot",
      icon: <TbMessageChatbotFilled className="w-9 h-9 mx-1" />,
    },
    {
      to: "/blogs",
      name: "Blogs",
      icon: <RiHealthBookFill className="w-9 h-9 mx-1" />,
    },
    {
      to: "/nearbydoctors",
      name: "Nearby doctors",
      icon: <FaUserDoctor className="w-9 h-9 mx-1" />,
    },
    {
      to: "/healthcheckup",
      name: "Health Checkup",
      icon: <TbCheckupList className="w-9 h-9 mx-1" />,
    },
  ];
  const location = useLocation();

  return (
    <div className="h-full sm:max-lg:w-1/6 min-[320px]:max-sm:hidden">
      <div className="flex justify-center">
        {navLinks.map((link) => {
          const isActive = location.pathname.startsWith(link.to);
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center ${
                isActive ? "text-green-800" : "text-green-900 hover:underline"
              } font-bold py-2.5 px-4 mx-5`}
            >
              {link.icon}
              <span className="sm:max-lg:hidden">{link.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;

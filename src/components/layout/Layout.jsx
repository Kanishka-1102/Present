import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Text, Box, Flex } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaInstagram, FaRobot } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import Nav from "./navbar/Nav";
import MobileNav from "./navbar/MobileNav";
import Profile from "./profile/Profile";
import ImageCarousel from "./ImageCarousel";
import { fetchUserData } from "../../services/userServices";
import logo from "../../assets/img/veda-bot-favicon.png";
import img2 from "../../assets/img/second.png";
import img3 from "../../assets/img/third.png";
import img from "../../assets/img/first.png";


const Layout = () => {
  const [userData, setUserData] = useState({});


  useEffect(() => {
    fetchUserData().then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/signup";
  };

  return (
    <div 
      className="relative min-h-screen bg-green-100 overflow-x-hidden overflow-y-auto"
      style={{
        '@media (max-width: 767px)': {
          height: 'calc(120% + 200px)',
        }
      }}
    >
      <div 
        className="absolute inset-0 bg-green-600 z-0"
        style={{
          clipPath: 'polygon(100% 60%, 100% 100%, 0 100%, 0 100%)'
        }}
      />

      <div className="relative z-10 px-4 sm:px-8">
        <div className="navbar flex justify-between items-center p-1 ml-4">
          <Link to="/" className="h-12 w-12 mx-1 flex flex-row items-center">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className="mx-2 my-2 text-green-950 text-2xl font-bold">VedaBot</span>
          </Link>
          <Nav />
          {userData.role === "admin" ? (
            <Button
              leftIcon={<AiOutlineLogout className="text-xl mx-2 text-red-500" />}
              colorScheme="green"
              variant="solid"
              onClick={handleSignOut}
              className="hover:bg-green-700"
            >
              Sign Out
            </Button>
          ) : (
            <Profile />
          )}
        </div>
        <MobileNav />

        <div className="flex flex-col md:flex-row justify-between items-center px-4 mt-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/4 flex justify-center md:justify-start">
            <img
              src={img2} 
              alt="Left Side Image"
              className="w-64 max-w-xs h-64 object-contain"
            />
          </div>

          <Box className="text-center w-full md:w-2/4">
            <Text 
              fontSize={["4xl", "5xl", "7xl"]} 
              fontWeight="bold" 
              fontFamily="cursive" 
              color="green.900"
            >
              VedaBot
            </Text>
            <Text 
              fontSize={["2xl", "3xl"]} 
              fontWeight="bold" 
              fontFamily="cursive" 
              color="green.900" 
              mt={2}
            >
              Take your health into your hand
            </Text>

            <Box mt={4} maxWidth="600px" mx="auto" px={4}>
              <Text 
                fontSize={["xl", "2xl"]} 
                color="green.900" 
                mb={4}
              >
                VedaBot is an innovative health assistant that uses the principles of Ayurveda
                to provide natural remedies, symptom detection, and prevention measures. 
                With the power of herbs and holistic medicine, we aim to enhance your well-being.
              </Text>
            </Box>
          </Box>

          <div className="w-full md:w-1/4 flex justify-center md:justify-end">
            <img
              src={img3}
              alt="Turmeric"
              className="w-64 max-w-xs h-64 object-contain "
            />
          </div>
        </div>

        <div className="hidden md:block grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 md:mt-19">
  <div className="md:col-span-4 flex justify-center items-center min-h-[300px]"> 
    <ImageCarousel />
  </div>
</div>


        <Flex
          className="fixed bottom-24 right-5 lg:right-10 flex-col items-center gap-4"
          zIndex={100}
        >
          <a 
            href="https://vedabot-ayurved.streamlit.app/" 
            className="bouncing-icon bg-green-500 rounded-full p-4 shadow-lg animate-bounce"
          >
            <FaRobot className="text-white text-2xl" title="Chatbot" />
          </a>
          <a 
            href="https://www.instagram.com/kanishka_sharma.11/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-pink-500 rounded-full p-4 shadow-lg"
          >
            <FaInstagram className="text-white text-2xl" title="Instagram" />
          </a>
          <a 
            href="https://forms.gle/ToHhAZrKFMJhzWuK7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-500 rounded-full p-4 shadow-lg"
          >
            <BiCommentDetail className="text-white text-2xl" title="Feedback" />
          </a>
        </Flex>

        <div className=" hidden md:block  fixed bottom-10 left-10">
          <img
            src={img}
            alt="First Image"
            className="w-48 h-48 object-contain"
          />
        </div>

       
      </div>
    </div>
  );
};

export default Layout;
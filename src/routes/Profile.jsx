import { Box, Flex } from "@chakra-ui/react";
import UserDetailsSection from "../components/profile/studentDetails/UserDetailsSection"
import UserBio from "../components/profile/userBio/UserBio";
import bgimg from "../../src/assets/img/veda-bot-bg.png";

function Profile() {

  return (
    <div>
      <Flex className="flex justify-center items-center h-screen" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <Flex className="md:flex-row flex-col mb-10">
        <Box
          flex="1"
        >
          <UserBio />
        </Box>
        <Box
          flex="2"
          className="flex space-y-3 flex-col justify-center items-start"
        >
          <UserDetailsSection />
        </Box>
      </Flex>
      </Flex>
    </div>
  );
}

export default Profile;

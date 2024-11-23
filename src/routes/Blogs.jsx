import { Flex, Box, Text, Grid } from "@chakra-ui/react";
import { Link } from 'react-router-dom'; // Import Link
import bgimg from "../../src/assets/img/veda-bot-bg.png";

const Blogs = () => {
  const blogData = [
    { title: "Yoga Ayurveda", path: "/yoga-ayurveda" },
    { title: "Ayurvedic Herbs", path: "/ayurvedic-herbs" },
    { title: "Ayurvedic Diet", path: "/ayurvedic-diet" },
    { title: "Holistic Healing", path: "/holistic-healing" },
    { title: "Seasonal Ayurvedic Practices", path: "/seasonal-ayurvedic-practices" },
    { title: "Managing Stress With Ayurveda", path: "/managing-stress-with-ayurveda" },
    { title: "Panchakarma", path: "/panchakarma" },
    { title: "Ayurvedic Beauty Secrets", path: "/ayurvedic-beauty-secrets" },
  ];

  return (
    <div>
      <Flex className="flex justify-center items-center h-screen" style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} p={5}>
          {blogData.map((blog, index) => (
            <Link to={blog.path} key={index}>
              <Box 
                borderWidth="1px" 
                borderRadius="lg" 
                overflow="hidden" 
                boxShadow="md" 
                p={5} 
                bg="green.900" // Set background color to green.900
                color="green.500" // Set text color to green.500
                height="200px" // Set a fixed height to make cards equal size
                _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <Text fontSize="xl" fontWeight="bold">{blog.title}</Text>
              </Box>
            </Link>
          ))}
        </Grid>
      </Flex>
    </div>
  );
}

export default Blogs;
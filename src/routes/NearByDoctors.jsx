import { useState, useEffect } from 'react';
import { Flex, Box, Button, Text } from '@chakra-ui/react';
import bgimg from "../../src/assets/img/veda-bot-bg.png";

const NearbyDoctors = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            setLoading(false);
          },
          (error) => {
            setError('Unable to retrieve your location. Please allow location access.');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  const redirectToGoogleMaps = (latitude, longitude) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=Ayurvedic+Doctors+near+${latitude},${longitude}`;
    window.location.href = mapsUrl; // Redirect to Google Maps
  };

  // If loading, show message asking for location access
  if (loading) {
    return (
      <Flex className="flex md:flex-row flex-col justify-center items-center h-screen" style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Text className="text-3xl font-bold text-green-900">Please allow location access to show nearby Ayurvedic doctors.</Text>
        </Box>
      </Flex>
    );
  }

  // If there's an error, show error message
  if (error) {
    return (
      <Flex className="flex md:flex-row flex-col justify-center items-center h-screen" style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Text color="red.500">{error}</Text>
        </Box>
      </Flex>
    );
  }

  // Construct the OpenStreetMap URL with the user's location
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${location.longitude - 0.01},${location.latitude - 0.01},${location.longitude + 0.01},${location.latitude + 0.01}&layer=mapnik&marker=${location.latitude},${location.longitude}`;

  return (
    <Flex className="flex md:flex-row flex-col justify-center items-center h-screen" style={{
      backgroundImage: `url(${bgimg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'}}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        height="100vh" 
        textAlign="center"
        color="white"
      >
        <h1 className='text-4xl font-bold mb-4 text-green-900'>Find Ayurvedic Doctors Near You</h1>
        <Box 
          mt={10}
          mb={10} 
          rounded="lg" 
          overflow="hidden" 
          display="flex" 
          justifyContent="center"
          alignItems="center"
          className="aspect-video"
        >
          <iframe 
            src={mapSrc} 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            className="h-full w-full object-cover"
          ></iframe>
        </Box>
        <Button 
          onClick={() => redirectToGoogleMaps(location.latitude, location.longitude)} 
          bg="green.800"
          color="white" 
          size="lg" 
          mb={4}
          _hover={{ bg: "green.900" }}
        >
          Find nearby ayurvedic doctors
        </Button>
      </Box>
    </Flex>
  );
};

export default NearbyDoctors;
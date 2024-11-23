import {
    Container,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    VStack,
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td
  } from '@chakra-ui/react';
  import bgimg from "../../../src/assets/img/veda-bot-bg.png";
  
  const AyurvedicDiet = () => {
    return (
      <Flex className="flex justify-center items-center h-screen" style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Container 
          maxW="800px" 
          p={5} 
          bg="#f0fced" 
          borderRadius="10px" 
          boxShadow="0 0 10px rgba(0,0,0,0.1)" 
          maxH="90vh" 
          overflowY="auto"
        >
          <VStack spacing={5}>
            <Heading as="h2" color="green.900" fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
              Ayurvedic Diet: Eating According to Your Dosha 🍽️🌿
            </Heading>
            
            <Text color="green.900">
              Welcome to our guide on the <Text as="span" color="red.500" fontWeight="bold">Ayurvedic Diet</Text>, where we explore how eating according to your dosha can enhance your health and well-being. Ayurveda, the ancient Indian system of medicine, emphasizes the importance of a balanced diet tailored to your individual constitution. Let's dive into the world of doshas and discover the best dietary practices for each type.
            </Text>
  
            <Heading as="h2" size="lg" color="green.900">Understanding Doshas 🌀</Heading>
            <Text color="green.900">
              In Ayurveda, doshas are the fundamental energies that govern our physical and mental processes. There are three primary doshas:
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Vata</strong> (Air and Ether): Governs movement, circulation, and communication.</ListItem>
              <ListItem color="green.900"><strong>Pitta</strong> (Fire and Water): Controls digestion, metabolism, and energy production.</ListItem>
              <ListItem color="green.900"><strong>Kapha</strong> (Earth and Water): Provides structure, lubrication, and stability.</ListItem>
            </UnorderedList>
            <Text color="green.900">
              Each person has a unique combination of these doshas, which influences their physical and mental characteristics. Imbalances in doshas can lead to health issues, and diet is a key factor in maintaining balance.
            </Text>
  
            <Heading as="h2" size="lg" color="green.900">Dietary Recommendations for Each Dosha 🥗</Heading>
  
            <Heading as="h3" size="md" color="green.900">1. Vata Dosha 🍃</Heading>
            <Text color="green.900">
              Vata individuals are typically energetic, creative, and lively. When out of balance, they may experience anxiety, dry skin, and digestive issues.
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="white" bg="teal.500">Foods to Favor</Th>
                  <Th color="white" bg="teal.500">Foods to Avoid</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr bg="teal.500">
                  <Td>Warm, cooked foods; Soups; Stews; Root vegetables; Nuts and seeds; Dairy; Sweet, sour, and salty tastes</Td>
                  <Td>Cold and raw foods; Caffeine; Bitter and astringent tastes; Dry foods; Light and airy foods</Td>
                </Tr>
              </Tbody>
            </Table>
  
            <Heading as="h3" size="md" color="green.900">2. Pitta Dosha 🔥</Heading>
            <Text color="green.900">
              Pitta individuals are usually passionate, intelligent, and strong-willed. When out of balance, they can experience anger, inflammation, and digestive problems.
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="white" bg="teal.500">Foods to Favor</Th>
                  <Th color="white" bg="teal.500">Foods to Avoid</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr bg="teal.500">
                  <Td>Cooling foods; Fresh fruits and vegetables; Dairy; Sweet, bitter, and astringent tastes; Whole grains; Legumes</Td>
                  <Td>Spicy and fried foods; Sour and salty tastes; Alcohol; Red meat; Caffeine; Excessive oil</Td>
                </Tr>
              </Tbody>
            </Table>
  
            <Heading as="h3" size="md" color="green.900">3. Kapha Dosha 🌍</Heading>
            <Text color="green.900">
              Kapha individuals are generally calm, steady, and nurturing. When out of balance, they may face weight gain, lethargy, and congestion.
            </Text>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th color="white" bg="teal.500">Foods to Favor</Th>
                  <Th color="white" bg="teal.500">Foods to Avoid</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr bg="teal.500">
                  <Td>Light and warm foods; Spices; Fruits and vegetables; Legumes; Bitter, pungent, and astringent tastes</Td>
                  <Td>Heavy and oily foods; Dairy; Sweet, sour, and salty tastes; Processed foods; Cold and raw foods</Td>
                </Tr>
              </Tbody>
            </Table>
  
            <Heading as="h2" size="lg" color="green.900">Incorporating Ayurvedic Dietary Practices into Your Daily Routine 🌱</Heading>
            <Text color="green.900">
              Here are some tips to help you incorporate Ayurvedic dietary practices into your daily life:
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Eat Mindfully:</strong> Pay attention to your food, chew slowly, and enjoy the flavors.</ListItem>
              <ListItem color="green.900"><strong>Follow a Routine:</strong> Eat at regular times each day to support your digestive health.</ListItem>
              <ListItem color="green.900"><strong>Balance Tastes:</strong> Ensure your meals include all six tastes: sweet, sour, salty, bitter, pungent, and astringent, with an emphasis on the tastes that balance your dosha.</ListItem>
              <ListItem color="green.900"><strong>Stay Hydrated:</strong> Drink warm water or herbal teas throughout the day.</ListItem>
              <ListItem color="green.900"><strong>Seasonal Eating:</strong> Adjust your diet according to the seasons, as each season affects the doshas differently.</ListItem>
            </UnorderedList>
  
            <Text color="green.900">
              By eating according to your dosha, you can support your body's natural balance and enhance your overall health and well-being. Remember, Ayurveda is a personalized approach to health, so listen to your body and adjust your diet as needed. 🌟
            </Text>
  
            <Text color="green.900">
              Ready to start your Ayurvedic dietary journey? Embrace these practices and experience the transformative power of eating according to your dosha! 🌿
            </Text>
          </VStack>
        </Container>
      </Flex>
    );
  };
  
  export default AyurvedicDiet;
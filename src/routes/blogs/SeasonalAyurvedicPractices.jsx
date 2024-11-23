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
  
  const SeasonalAyurvedicPractices = () => {
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
          maxH="90vh" // Limit the height of the container
          overflowY="auto" // Allow vertical scrolling if content exceeds height
        >
          <VStack spacing={5}>
            <Heading as="h2" color="green.900" fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
              Seasonal Ayurvedic Practices: Staying Healthy All Year Round 🌿🕰️
            </Heading>
            <Text color="green.900">
              Welcome to our comprehensive guide on <Text as="span" color="red.500" fontWeight="bold">Seasonal Ayurvedic Practices</Text>. Ayurveda, the ancient science of life, offers wisdom on how to maintain balance and health throughout the year by aligning our routines and diets with the changing seasons. Let's explore the best practices and foods for each season to help you stay vibrant and healthy all year round.
            </Text>
  
            <Heading as="h2" size="lg" color="green.900">Understanding Seasonal Routines in Ayurveda 🌞🍁❄️🌸</Heading>
            <Text color="green.900">
              Ayurveda emphasizes living in harmony with the natural rhythms of the environment. Each season brings changes in weather and energy, which can affect our doshas (body constitutions). By adjusting our lifestyle and diet according to the season, we can maintain balance and prevent imbalances that lead to health issues.
            </Text>
  
            <Heading as="h3" size="md" color="green.900">Spring (Kapha Season) 🌸</Heading>
            <Text color="green.900">
              Spring is characterized by the qualities of Kapha dosha: heavy, moist, and cool. This season can lead to an accumulation of Kapha, causing sluggishness, congestion, and allergies.
            </Text>
            <Heading as="h4" size="sm" color="green.900">Recommended Practices</Heading>
            <UnorderedList>
              <ListItem color="green.900"><strong>Detoxification:</strong> Start the season with a gentle detox to remove accumulated toxins.</ListItem>
              <ListItem color="green.900"><strong>Exercise:</strong> Engage in vigorous physical activities to stimulate energy and reduce Kapha.</ListItem>
              <ListItem color="green.900"><strong>Breathing Exercises:</strong> Practice pranayama (breathing exercises) to clear respiratory passages.</ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" color="green.900">Recommended Foods</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th bg="teal.500">Foods to Favor</Th>
                  <Th bg="teal.500">Foods to Avoid</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td bg="teal.500">Light, dry, and warm foods; Spices like ginger, black pepper, and turmeric; Bitter greens; Legumes</Td>
                  <Td bg="teal.500">Heavy, oily, and cold foods; Dairy products; Sweets; Fried foods</Td>
                </Tr>
              </Tbody>
            </Table>
  
            <Heading as="h3" size="md" color="green.900">Summer (Pitta Season) 🌞</Heading>
            <Text color="green.900">
              Summer is dominated by Pitta dosha, which brings heat, intensity, and transformation. Excess Pitta can lead to overheating, irritability, and inflammation.
            </Text>
            <Heading as="h4" size="sm" color="green.900">Recommended Practices</Heading>
            <UnorderedList>
              <ListItem color=" green.900"><strong>Stay Cool:</strong> Avoid excessive heat exposure and stay hydrated.</ListItem>
              <ListItem color="green.900"><strong>Moderate Exercise:</strong> Engage in calming activities like swimming and yoga.</ListItem>
              <ListItem color="green.900"><strong>Relaxation:</strong> Incorporate cooling practices like meditation and spending time in nature.</ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" color="green.900">Recommended Foods</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th bg="teal.500">Foods to Favor</Th>
                  <Th bg="teal.500">Foods to Avoid</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td bg="teal.500">Cooling, hydrating, and light foods; Fresh fruits; Leafy greens; Dairy products in moderation; Herbs like cilantro and mint</Td>
                  <Td bg="teal.500">Spicy, oily, and salty foods; Fermented foods; Red meat; Alcohol</Td>
                </Tr>
              </Tbody>
            </Table>
  
            <Heading as="h3" size="md" color="green.900">Fall (Vata Season) 🍁</Heading>
            <Text color="green.900">
              Fall brings the dry, cool, and windy qualities of Vata dosha. This season can lead to dryness, anxiety, and digestive issues.
            </Text>
            <Heading as="h4" size="sm" color="green.900">Recommended Practices</Heading>
            <UnorderedList>
              <ListItem color="green.900"><strong>Grounding Routines:</strong> Establish regular daily routines to provide stability.</ListItem>
              <ListItem color="green.900"><strong>Warmth:</strong> Keep warm and avoid exposure to cold and wind.</ListItem>
              <ListItem color="green.900"><strong>Oil Massage:</strong> Perform daily self-massage with warm oil to nourish and calm Vata.</ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" color="green.900">Recommended Foods</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th bg="teal.500">Foods to Favor</Th>
                  <Th bg="teal.500">Foods to Avoid</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td bg="teal.500">Warm, moist, and nourishing foods; Root vegetables; Whole grains; Healthy fats; Warming spices like cinnamon and cardamom</Td>
                  <Td bg="teal.500">Cold, dry, and raw foods; Caffeine; Bitter and astringent tastes; Light and airy foods</Td>
                </Tr>
              </Tbody>
            </Table>
  
            <Heading as="h3" size="md" color="green.900">Winter (Kapha and Vata Season) ❄️</Heading>
            <Text color="green.900">
              Winter combines the cold and dry qualities of Vata with the heavy and moist qualities of Kapha. This season requires warming and nourishing practices to maintain balance.
            </Text>
            <Heading as="h4" size="sm" color="green.900">Recommended Practices</Heading>
            <UnorderedList>
              <ListItem color="green.900"><strong>Stay Warm:</strong> Dress warmly and enjoy warm beverages and foods.</ListItem>
              <ListItem color="green.900"><strong>Exercise:</strong> Engage in regular physical activity to counter Kapha's heaviness.</ListItem>
              <ListItem color="green.900"><strong>Self-Care:</strong> Include self-massage and oiling practices to nourish the body and skin.</ListItem>
            </UnorderedList>
            <Heading as="h4" size="sm" color="green.900">Recommended Foods</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th bg="teal.500">Foods to Favor</Th>
                  <Th bg="teal.500">Foods to Avoid</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td bg="teal.500">Warm, hearty, and nourishing foods; Soups and stews; Whole grains; Nuts and seeds; Spices like ginger, black pepper, and turmeric</Td>
                  <Td bg="teal.500">Cold and raw foods; Dairy products; Sweets; Fried foods</Td>
                </Tr>
   </Tbody>
            </Table>
  
            <Heading as="h2" size="lg" color="green.900">Conclusion 🌿🕰️</Heading>
            <Text color="green.900">
              By aligning your lifestyle and diet with the changing seasons, you can maintain balance and support your overall health. Ayurveda offers valuable insights into how to adapt our routines and food choices to harmonize with nature's rhythms.
            </Text>
  
            <Text color="green.900">
              Embrace these seasonal Ayurvedic practices and enjoy a healthier, more vibrant life all year round! 🌟
            </Text>
          </VStack>
        </Container>
      </Flex>
    );
  };
  
  export default SeasonalAyurvedicPractices;
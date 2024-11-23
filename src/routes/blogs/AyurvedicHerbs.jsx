import {
    Container,
    Heading,
    Text,
    VStack,
    Box,
    Flex
  } from '@chakra-ui/react';
  import bgimg from "../../../src/assets/img/veda-bot-bg.png";
  
  const AyurvedicHerbs = () => {
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
            Top 10 Ayurvedic Herbs for Daily Health 🌿✨
          </Heading>
          
          <Text color="green.900">
            Welcome to our guide on the <Text as="span" color="red.500" fontWeight="bold">Top 10 Ayurvedic Herbs</Text> for daily health. These herbs have been used for centuries in Ayurveda to promote health, prevent diseases, and enhance overall well-being. Let's explore their benefits and how to incorporate them into your daily routine.
          </Text>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">1. Ashwagandha 🌱</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Ashwagandha is known for its adaptogenic properties, helping the body manage stress. It boosts energy levels, supports the immune system, and enhances cognitive function.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Take 1-2 teaspoons of Ashwagandha powder mixed with warm milk or water before bed. You can also find it in capsule form.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">2. Turmeric 🌟</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Turmeric has powerful anti-inflammatory and antioxidant properties. It supports joint health, boosts immunity, and aids in digestion.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Add a teaspoon of turmeric powder to your daily cooking, smoothies, or warm milk. Golden milk, made with turmeric and milk, is a popular drink.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">3. Triphala 🌿</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Triphala, a blend of three fruits (Amla, Haritaki, and Bibhitaki), supports digestive health, detoxifies the body, and improves skin health.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Take 1 teaspoon of Triphala powder with warm water before bed or in the morning on an empty stomach.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">4. Brahmi 🌾</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Brahmi is known for enhancing memory, concentration, and cognitive function. It also helps reduce anxiety and stress.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Take Brahmi powder with warm water or milk. It is also available in capsule form.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">5. Tulsi (Holy Basil) 🌿</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Tulsi is revered for its immune-boosting properties. It also helps in relieving respiratory conditions, reducing stress, and promoting longevity.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Brew Tulsi leaves as a tea or add Tulsi powder to your daily smoothie.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">6. Shatavari 🌸</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Shatavari is particularly beneficial for women’s health. It supports reproductive health, balances hormones , and enhances vitality.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Mix Shatavari powder with warm milk or water. It can also be taken in capsule form.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">7. Neem 🍃</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Neem has strong antibacterial and antifungal properties. It supports skin health, detoxifies the blood, and boosts immunity.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Neem powder can be taken with water or applied topically as a paste for skin issues.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">8. Licorice Root 🍭</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Licorice root supports digestive health, soothes inflammation, and enhances respiratory health.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Brew licorice root as a tea or take it in powdered form with warm water.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">9. Amla (Indian Gooseberry) 🍏</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Amla is rich in Vitamin C and antioxidants. It supports immune health, enhances digestion, and promotes healthy hair and skin.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Consume Amla juice daily or take Amla powder with honey or warm water.</Text>
          </Box>
  
          <Box>
            <Heading as="h3" size="lg" color="green.900">10. Guggul 🧪</Heading>
            <Text color="green.900"><strong>Benefits:</strong> Guggul helps in detoxifying the body, supports weight management, and promotes healthy cholesterol levels.</Text>
            <Text color="green.900"><strong>How to Use:</strong> Take Guggul resin or powder as directed by an Ayurvedic practitioner, often in tablet or capsule form.</Text>
          </Box>
  
          <Text color="green.900">
            Incorporating these Ayurvedic herbs into your daily routine can significantly enhance your health and well-being. Start with small amounts and consult an Ayurvedic practitioner for personalized advice.
          </Text>
  
          <Text color="green.900">
            Embrace the power of Ayurveda and experience the transformative benefits of these ancient herbs in your life! 🌟
          </Text>
        </VStack>
      </Container>
      </Flex>
    );
  };
  
  export default AyurvedicHerbs;
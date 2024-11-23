import {
  Container,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Flex
} from '@chakra-ui/react';
import bgimg from "../../../src/assets/img/veda-bot-bg.png";

const YogaAyurveda = () => {
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
          Yoga and Ayurveda: A Perfect Synergy 🧘‍♀️🌿
        </Heading>
        <Text color="green.900">
          Welcome to our comprehensive guide on the beautiful synergy between{' '}
          <Text as="span" color="red.500" fontWeight="bold">Yoga</Text> and{' '}
          <Text as="span" color="red.500" fontWeight="bold">Ayurveda</Text>. These ancient Indian practices are more than just systems of health; they are pathways to a holistic and balanced life. Let's dive into how they connect and enhance our well-being.
        </Text>
        
        <Heading as="h2" size="lg" color="green.900">1. The Connection Between Yoga and Ayurveda 🔗</Heading>
        <Text color="green.900">
          Yoga and Ayurveda are like two sides of the same coin. They both originate from the Vedic texts and share a common goal: achieving a state of harmony in the body, mind, and spirit. Here's how they intertwine:
        </Text>
        <UnorderedList>
          <ListItem color="green.900"><strong>Common Origin:</strong> Both practices stem from the ancient Vedic culture, which provides a deep spiritual foundation.</ListItem>
          <ListItem color="green.900"><strong>Holistic Approach:</strong> While Ayurveda focuses on the body's health through diet, herbs, and lifestyle adjustments, Yoga emphasizes physical postures (asanas), breath control (pranayama), and meditation for mental and spiritual well-being.</ListItem>
          <ListItem color="green.900"><strong>Balancing Doshas:</strong> Ayurveda categorizes individuals based on three doshas (Vata, Pitta, Kapha). Yoga helps in balancing these doshas through specific asanas and practices tailored to individual needs.</ListItem>
        </UnorderedList>
        
        <Heading as="h2" size="lg" color="green.900">2. How Combining Both Practices Enhances Health and Well-Being 🌟</Heading>
        <Text color="green.900">
          Integrating Yoga and Ayurveda can lead to a more profound and sustainable state of health. Here’s how combining these practices benefits you:
        </Text>
        
        <Heading as="h3" size="md" color="green.900">Enhanced Physical Health 🏃‍♂️</Heading>
        <Text color="green.900">
          Yoga asanas improve flexibility, strength, and posture, while Ayurvedic principles guide you towards a diet and lifestyle that support your body type (dosha). This combination helps in preventing diseases and maintaining overall physical health.
        </Text>
        
        <Heading as="h3" size="md" color="green.900">Mental Clarity and Emotional Balance 🧘‍♀️</Heading>
        <Text color="green.900">
          Ayurveda offers herbs and practices that nourish the mind, reducing stress and anxiety. Yoga complements this by promoting mental clarity and emotional stability through meditation and breathing exercises.
        </Text>
        
        <Heading as="h3" size="md" color="green.900">Detoxification and Rejuvenation 🌿</Heading>
        <Text color="green.900">
          Ayurveda’s detoxifying treatments (like Panchakarma) and dietary guidelines help in cleansing the body. Yoga further aids this process through asanas that stimulate the internal organs and improve circulation, leading to a comprehensive detoxification and rejuvenation.
        </Text>

        <Heading as="h3" size="md" color="green.900">Spiritual Growth 🌼</Heading>
        <Text color="green.900">
          Both Yoga and Ayurveda emphasize the connection between the individual and the universe. Practicing both can deepen your spiritual journey, fostering a sense of inner peace and purpose.
        </Text>
        
        <Text color="green.900">
          In conclusion, Yoga and Ayurveda together form a complete system of health and well-being. By incorporating both into your daily routine, you can achieve a balanced, harmonious, and fulfilling life.
        </Text>
        
        <Text color="green.900">
          Ready to embark on this journey? 🌈 Start today and experience the transformative power of Yoga and Ayurveda!
        </Text>
      </VStack>
    </Container>
    </Flex>
  );
};

export default YogaAyurveda;
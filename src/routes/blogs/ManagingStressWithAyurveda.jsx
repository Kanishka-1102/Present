import {
    Container,
    Heading,
    Text,
    UnorderedList,
    ListItem,
    VStack,
    Flex
  } from '@chakra-ui/react';
  import bgimg from "../../../src/assets/img/veda-bot-bg.png"; // Update the path as necessary
  
  const ManagingStressWithAyurveda = () => {
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
            <Heading as="h2" className="heading-646" color="green.900">
              Managing Stress with Ayurveda 🌿🧘‍♀️
            </Heading>
            <Text color="green.900">
              Welcome to our comprehensive guide on <span className="highlight">Managing Stress with Ayurveda</span>. In today's fast-paced world, stress has become a common issue affecting mental and physical health. Ayurveda, the ancient science of life, offers effective techniques to alleviate stress and promote mental well-being. Let's explore these techniques, including meditation, yoga, and herbal remedies, to help you achieve a balanced and stress-free life.
            </Text>
  
            <Heading as="h2" size="lg" color="green.900">Ayurvedic Techniques for Stress Relief 🌟</Heading>
  
            <Heading as="h3" size="md" color="green.900">1. Meditation 🧘‍♂️</Heading>
            <Text color="green.900">
              Meditation is a powerful Ayurvedic practice that calms the mind, reduces stress, and enhances mental clarity. Regular meditation helps in balancing the doshas and promotes inner peace.
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Mindfulness Meditation:</strong> Focus on your breath and observe your thoughts without judgment. This practice helps in grounding and calming the mind.</ListItem>
              <ListItem color="green.900"><strong>Guided Meditation:</strong> Listen to guided meditation recordings to relax and de-stress. These recordings often include calming music and instructions to help you focus.</ListItem>
              <ListItem color="green.900"><strong>Mantra Meditation:</strong> Repeating a soothing mantra, such as "Om," can help in centering your mind and reducing stress.</ListItem>
            </UnorderedList>
  
            <Heading as="h3" size="md" color="green.900">2. Yoga 🧘‍♀️</Heading>
            <Text color="green.900">
              Yoga is a holistic practice that combines physical postures, breathing exercises, and meditation. It helps in releasing physical tension, improving flexibility, and calming the mind.
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Asanas (Postures):</strong> Practice gentle yoga postures like Child's Pose (Balasana), Cat-Cow Pose (Marjaryasana-Bitilasana), and Corpse Pose (Savasana) to relieve stress and tension.</ListItem>
              <ListItem color="green.900"><strong>Pranayama (Breathing Exercises):</strong> Techniques like Nadi Shodhana (Alternate Nostril Breathing) and Bhramari (Bee Breath) are effective in calming the nervous system and reducing stress.</ListItem>
              <ListItem color="green.900"><strong>Relaxation Techniques:</strong> Incorporate yoga nidra (yogic sleep) to deeply relax your body and mind.</ListItem>
            </UnorderedList>
  
            <Heading as="h3" size="md" color="green.900">3. Herbal Remedies 🌿</Heading>
            <Text color="green.900">
              Ayurveda offers a variety of herbal remedies that help in managing stress and promoting mental well-being. These herbs have adaptogenic properties that support the body's ability to cope with stress.
            </Text>
            <UnorderedList>
              <ListItem color="green.900"><strong>Ashwagandha:</strong> Known for its adaptogenic properties, Ashwagandha helps in reducing stress, anxiety, and fatigue. It also supports overall vitality and resilience.</ListItem>
              <ListItem color="green.900"><strong>Brahmi:</strong> Brahmi is a brain tonic that enhances cognitive function, reduces anxiety, and promotes mental clarity.</ListItem>
              <ListItem color="green.900"><strong>Jatamansi:</strong> Jatamansi is effective in calming the mind, reducing stress, and improving sleep quality.</ListItem>
              <ListItem color="green.900"><strong>Shankhapushpi:</strong> This herb is known for its calming effects on the nervous system and helps in reducing mental stress and anxiety.</ListItem>
            </UnorderedList>
  
            <Heading as="h2" size="lg" color="green.900">Additional Ayurvedic Tips for Stress Management 🌸</Heading>
            <UnorderedList>
              <ListItem color="green.900"><strong>Daily Routine:</strong> Establish a consistent daily routine to create stability and reduce stress. Wake up early, eat at regular times, and go to bed early.</ListItem>
              <ListItem color="green.900"><strong>Diet:</strong> Eat a balanced diet that supports your dosha. Include fresh, organic, and whole foods in your meals. Avoid processed foods, caffeine, and excessive sugar.</ListItem>
              <ListItem color="green.900"><strong>Self-Massage:</strong> Practice Abhyanga (self-massage) with warm sesame oil to calm the nervous system and promote relaxation.</ListItem>
              <ListItem color="green.900"><strong>Aromatherapy:</strong> Use essential oils like lavender, sandalwood, and chamomile in diffusers or during massage to reduce stress and promote relaxation.</ListItem>
              <ListItem color="green.900"><strong>Hydration:</strong> Stay hydrated by drinking warm water or herbal teas throughout the day.</ListItem>
              <ListItem color="green.900"><strong>Sleep:</strong> Ensure you get adequate sleep by maintaining a regular sleep schedule and creating a calming bedtime routine.</ListItem>
            </UnorderedList>
  
            <Heading as="h2" size="lg" color="green.900">Conclusion 🌿🧘‍♀️</Heading>
            <Text color="green.900">
              By incorporating Ayurvedic techniques such as meditation, yoga, and herbal remedies into your daily routine, you can effectively manage stress and enhance your mental well-being. Ayurveda offers a holistic approach to stress management, focusing on balancing the mind, body, and spirit.
            </Text>
  
            <Text color="green.900">
              Embrace these Ayurvedic practices and experience the transformative power of natural stress relief and mental harmony! 🌟
            </Text>
          </VStack>
        </Container>
      </Flex>
    );
  };
  
  export default ManagingStressWithAyurveda;
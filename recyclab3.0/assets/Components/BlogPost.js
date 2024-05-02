import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView , ImageBackground } from 'react-native';

const BlogPost = () => {
  return (
    <ImageBackground source={require('../vec6.jpeg')} style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../cop22.jpg')}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>COP22 in Morocco: Advancing Sustainability</Text>
        <Text style={styles.subtitle}>Introduction</Text>
        <Text style={styles.paragraph}>
          The Conference of the Parties (COP) 22, held in Marrakech, Morocco, was a pivotal
          event focused on global sustainability. With a strong emphasis on climate action,
          COP22 brought together leaders and stakeholders to address pressing environmental
          challenges and advance sustainable practices.
        </Text>
        <Text style={styles.subtitle}>Renewable Energy Initiatives</Text>
        <Text style={styles.paragraph}>
          Morocco's commitment to renewable energy was a highlight of COP22. The country has
          invested heavily in solar and wind power projects, setting ambitious targets for
          clean energy production.
        </Text>
        <Image
          source={require('../cop22.jpeg')}
          style={styles.inlineImage}
          resizeMode="cover"
        />
        <Text style={styles.subtitle}>Conservation Efforts</Text>
        <Text style={styles.paragraph}>
          In addition to renewable energy, Morocco has prioritized conservation efforts. Initiatives
          to protect natural habitats and promote biodiversity were showcased at COP22.
        </Text>
        <Image
          source={require('../indusTangier.jpeg')}
          style={styles.inlineImage}
          resizeMode="cover"
        />
        <Text style={styles.subtitle}>Community Engagement</Text>
        <Text style={styles.paragraph}>
          One of the key outcomes of COP22 was the emphasis on community engagement. Local communities
          in Morocco actively participated in sustainability projects and discussions.
        </Text>
        <Text style={styles.subtitle}>Conclusion</Text>
        <Text style={styles.paragraph}>
          COP22 demonstrated Morocco's leadership in the global effort to combat climate change.
          The event underscored the importance of international cooperation and innovation in
          achieving a sustainable future.
        </Text>
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  content: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#555',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#666',
  },
  inlineImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
});

export default BlogPost;

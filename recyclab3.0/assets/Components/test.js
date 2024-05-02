// HomeScreen.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StackNav from './StackNav';

const Blog = ({navigation}) => {

  const handleBlogPostPress = () => {
    navigation.navigate('BlogPost', {
      title: 'Title of the Article',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sapien ac libero consequat, vel fermentum ligula vehicula.',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBlogPostPress} style={styles.card}>
        <Text style={styles.title}>Title of the Blog Post</Text>
        <Text style={styles.preview}>
          Preview of the article content goes here...
        </Text> 

      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  preview: {
    fontSize: 16,
    color: '#666',
  },
});

export default Blog;

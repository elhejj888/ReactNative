import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FullArticleScreen = ({ route }) => {
  // Extract article data from route params (passed during navigation)
  const { title, content } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'justify',
  },
});

export default FullArticleScreen;

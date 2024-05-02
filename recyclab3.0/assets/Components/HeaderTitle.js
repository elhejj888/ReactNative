import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HeaderTitle = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textPart1}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Ensure text parts are aligned horizontally
  },
  textPart1: {
    color: '#004345',
    fontFamily: 'ComfortaaBold',
    fontSize: 28,
  },
  textPart2: {
    color: '#fff',
    fontFamily: 'ComfortaaBold', // Apply the same font style
    fontSize: 20,
  },
});

export default HeaderTitle;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

const categories = [
    { name: 'Batteries', percentage: 0.1, color: '#F44336' },
    { name: 'Textile', percentage: 0.15, color: '#03A9F4' },
    { name: 'Paper', percentage: 0.20, color: '#FFEB3B' },
    { name: 'Boxes', percentage: 0.08, color: '#4CAF50' },
    { name: 'Wood', percentage: 0.12, color: '#9C27B0' },
    { name: 'Steel', percentage: 0.05, color: '#FF5722' },
    { name: 'Plastic', percentage: 0.18, color: '#607D8B' },
    { name: 'Wheels', percentage: 0.07, color: '#9E9E9E' },
    { name: 'Glass', percentage: 0.05, color: '#795548' },
  ];

  const data = {
    labels: ["Batteries", "Textile", "Paper","Boxes", "Wood", "Steel","Plastic", "Wheels", "Glass"], // optional
    data: [0.1, 0.15, 0.2, 0.08, 0.12, 0.05, 0.18, 0.07, 0.05]
  };


  

const ProgressChart = ({ title, percentage }) => {
    return (
        <View style={styles.container}>
          {categories.map((category, index) => (
            <View key={index} style={styles.chartContainer}>
              <Text style={styles.title}>{category.name}</Text>
              <ProgressCircle
                size={100}
                progress={category.percentage}
                unfilledColor="#FFF"
                borderWidth={0}
                thickness={10}
                color={category.color}
                showsText
                formatText={(progress) => `${Math.round(progress * 100)}%`}
                textStyle={styles.progressText}
              />
              
            </View>
          ))}
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
      },
      chartContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 15,
        margin: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
      },
      progressText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
      },
    });

export default ProgressChart;

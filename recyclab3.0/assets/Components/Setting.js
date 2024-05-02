import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity , ImageBackground } from 'react-native';

const Setting = ({ navigation }) => {
    // Function to navigate to a specific service
    const navigateToService = (screenName) => {
      navigation.navigate(screenName);
    };
  
    return (
    <ImageBackground source={require('../vec2.jpeg')} style={{ flex: 1 }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigateToService('BuyMaterial')}
        >
          <Image
            source={require('../highQuality.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Buy Recyclables</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigateToService('SellMaterial')}
        >
          <Image
            source={require('../fast.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Sell Recyclables</Text>
        </TouchableOpacity>
  
        {/* Additional services related to recycling or smart city */}
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigateToService('AdminSc')}
        >
          <Image
            source={require('../option.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Smart City Solutions</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => navigateToService('WasteManagement')}
        >
          <Image
            source={require('../home.png')}
            style={styles.serviceImage}
          />
          <Text style={styles.serviceText}>Waste Management</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20, 
    },
    serviceCard: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: '#f0f0f0', // Card background color
      padding: 15,
      marginBottom: 20,
      borderRadius: 10,
      elevation: 5,
    },
    serviceImage: {
      width: 60,
      height: 60,
      marginRight: 15,
    },
    serviceText: {
      fontFamily: 'Quicksand',
      fontSize: 18,
      color: '#333', // Text color
    },
  });
  

export default Setting;
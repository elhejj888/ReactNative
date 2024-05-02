import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet ,ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BuyMaterial = () => {
  const [materialType, setMaterialType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [comments, setComments] = useState('');

  const handleBuyMaterial = () => {
    // Logic to handle buying material (e.g., send API request)
    console.log('Buying material:', { materialType, quantity, comments });
    // Reset input fields after submitting
    setMaterialType('');
    setQuantity('');
    setComments('');
  };
  return (
    <ImageBackground source={require('../../vec2.jpeg')} style={{ flex: 1 }}>
        <View style={styles.container}>
      <Text style={styles.header}>Buy Recyclable Material</Text>

      <Picker
        selectedValue={materialType}
        style={styles.dropdown}
        onValueChange={(itemValue) => setMaterialType(itemValue)}
      >
        <Picker.Item label="Select Material Type" value="" />
        <Picker.Item label="Plastic" value="Plastic" />
        <Picker.Item label="Paper" value="Paper" />
        <Picker.Item label="Boxes" value="Boxes" />
        <Picker.Item label="Wood" value="Wood" />
        <Picker.Item label="Steel" value="Steel" />
        <Picker.Item label="Batteries" value="Batteries" />
        {/* Add more materials as needed */}
      </Picker>

      <TextInput
        style={styles.input}
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Quantity (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={[styles.input, styles.multilineInput]}
        value={comments}
        onChangeText={setComments}
        placeholder="Additional Comments"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleBuyMaterial}>
        <Text style={styles.buttonText}>Buy Material</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 20,
    borderRadius: 10,
    opacity: 0.9,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  dropdown: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#006b6f',
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BuyMaterial;

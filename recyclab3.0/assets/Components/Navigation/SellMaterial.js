import React, { useState , useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert , PermissionsAndroid } from 'react-native';
import {ImagePicker , launchCamera , launchImageLibrary} from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import { Camera } from 'expo-camera';

const SellMaterial = () => {
  const [materialType, setMaterialType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [comments, setComments] = useState('');
  const [imageUri, setImageUri] = useState('./vec2.jpeg');

  
  
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      console.log('Photo taken:', photo);
      // Handle the captured photo (e.g., save to state, display in UI)
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const openCameraLib = async () => {
    try {
      // Request camera permission
  
      // Configure media type options for the camera
      const options = {
        mediaType: 'photo', // Set media type to 'photo' for image capture
        quality: 0.8, // Image quality (0 to 1)
        maxWidth: 800, // Maximum width of the captured image
        maxHeight: 800, // Maximum height of the captured image
        saveToPhotos: true, // Save captured image to device photos album
      };
  
      // Launch the camera with specified options
      launchCamera(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled camera operation');
        } else if (response.errorCode) {
          console.log(`Camera error: ${response.errorMessage}`);
        } else {
          // Handle captured image data (response.uri) here
          console.log('Captured image URI:', response.uri);
          // Additional processing or upload logic can be implemented
        }
      });
    } catch (error) {
      console.log('Camera permission request error:', error);
    }
  };
  
  
  const handleSelectImage = () => {
    ImagePicker.showImagePicker({ title: 'Select Image', mediaType: 'photo' }, (response) => {
      if (!response.didCancel && !response.error) {
        setImageUri(response.uri);
      }
    });
  };
  const handleOpenCamera = () => {
    // launchCamera({ mediaType: 'photo' }, (response) => {
    //   if (!response.didCancel && !response.error) {
    //     setImageUri(response.uri);
    //   }
    // });
    launchImageLibrary({ mediaType: 'photo' }, (response) => {});
  };
  

  const handleSellMaterial = () => {
    // Check if all required fields are filled
    if (!materialType || !quantity) {
      Alert.alert('Missing Information', 'Please fill in all required fields.');
      return;
    }

    // Logic to handle selling material (e.g., send API request)
    console.log('Selling material:', { materialType, quantity, comments, imageUri });
    // Reset input fields after submitting
    setMaterialType('');
    setQuantity('');
    setComments('');
    setImageUri(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sell Recyclable Material</Text>

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

      <TouchableOpacity style={styles.imagePickerButton} onPress={handleSelectImage}>
        <Text style={styles.imagePickerButtonText}>Select Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openCameraLib}>
        <Text style={styles.buttonText}>Take Photo</Text>
      </TouchableOpacity>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.imagePreview} />
      )}

    <TouchableOpacity style={styles.button} onPress={handleSellMaterial}>
        <Text style={styles.buttonText}>Sell Material</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  imagePickerButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#006b6f',
    marginBottom: 20,
  },
  imagePickerButtonText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
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
  camera: {
    alignItems: 'center',
    width: 300,
    height: 300,
  },
});

export default SellMaterial;

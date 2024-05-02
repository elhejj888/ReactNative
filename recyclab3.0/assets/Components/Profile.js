import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EditProfile from './Settings/EditProfile';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );

}

const Profile = ({navigation}) => {
  const handleLogout = () => {
    // Implement logout functionality here
    console.log('User logged out');
  };
  const navigateToService = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity onPress={()=>navigateToService('EditProfile')} style={styles.option}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigateToService('ChangePwd')} style={styles.option}>
          <Text style={styles.optionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Text style={[styles.optionText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        <TouchableOpacity onPress={()=>navigateToService('NotificationSettings')} style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Dark Mode</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fff',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 16,
    color: '#666',
  },
  logoutText: {
    color: 'red',
  },
});

export default Profile;

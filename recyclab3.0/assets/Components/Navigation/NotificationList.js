import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const NotificationList = () => {
  const notifications = [
    { id: 1, action: 'Sold plastic material', time: '2 hours ago', icon: require('../../icon.png') },
    { id: 2, action: 'Bought paper items', time: '3 hours ago', icon: require('../../plus.png') },
    { id: 3, action: 'New user registered', time: '5 hours ago', icon: require('../../user.png') },
    { id: 4, action: 'Sold textile waste', time: '6 hours ago', icon: require('../../icon.png') },
    { id: 5, action: 'Registered new buyer', time: '8 hours ago', icon: require('../../user.png') },
  ];

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={item.icon} style={styles.notificationIcon} />
      <View style={styles.notificationText}>
        <Text style={styles.notificationAction}>{item.action}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={notifications}
      renderItem={renderNotificationItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingVertical: 8,
  },
  notificationIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 20,
  },
  notificationText: {
    flex: 1,
  },
  notificationAction: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#37474F',
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 14,
    color: '#9E9E9E',
  },
});

export default NotificationList;

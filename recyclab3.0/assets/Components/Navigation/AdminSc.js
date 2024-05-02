import React from 'react';
import { View, Text, StyleSheet , ImageBackground } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Row } from 'react-native-table-component';
import NotificationList from './NotificationList';
import ProgressChart from './ProgressChart';
import ServiceChart from './ServiceChart';


const AdminSc = () => {
  const tableHead = ['Name', 'Sales', 'Inventory'];
  const tableData = [
    ['Plastic', Math.floor(Math.random() * 100), Math.floor(Math.random() * 200)],
    ['Paper', Math.floor(Math.random() * 100), Math.floor(Math.random() * 200)],
    ['Metal', Math.floor(Math.random() * 100), Math.floor(Math.random() * 200)],
    ['Glass', Math.floor(Math.random() * 100), Math.floor(Math.random() * 200)],
    ['Textile', Math.floor(Math.random() * 100), Math.floor(Math.random() * 200)],
  ];

  return (
    <ImageBackground source={require('../../vec1.jpeg')} style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Admin Dashboard</Text>

      {/* Line Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Sales Performance</Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{ data: [20, 45, 28, 80, 99, 43] }],
          }}
          width={350}
          height={200}
          bezier
          yAxisSuffix="%"
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(63, 81, 181, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>

      {/* Bar Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Inventory Status</Text>
        <BarChart
          chartTitle="Inventory Status"
          data={{
            labels: ['Plastic', 'Paper', 'Metal', 'Glass', 'Textile'],
            datasets: [{ data: [50, 80, 60, 40, 70] }],
          }}
          width={350}
          height={200}
          yAxisSuffix=" units"
          chartConfig={{
            backgroundColor: '#FFF',
            backgroundGradientFrom: '#FFF',
            backgroundGradientTo: '#FFF',
            decimalPlaces: 0,
            color: (opacity = 2) => `rgba(10, 106, 109, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>

      {/* Pie Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Waste Composition</Text>
        <ProgressChart />
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
        <Text style={styles.chartTitle}>Material Statistics</Text>
        <NotificationList />
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  tableContainer: {
    width: '100%',
    borderRadius: 16,
  },
  tableHead: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  tableText: {
    margin: 3,
    textAlign: 'center',
  },
  tableRow: {
    height: 20,
    backgroundColor: '#FFFFFF',
  },
});

export default AdminSc;

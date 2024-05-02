import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressRing = ({ rings }) => {
  return (
    <View style={styles.container}>
      {rings.map((ring, index) => (
        <View key={index} style={[styles.ringContainer, { width: ring.diameter, height: ring.diameter }]}>
          <View style={styles.ring}>
            <View style={[styles.ringProgress, { borderColor: ring.color, width: ring.diameter, height: ring.diameter }]}>
              <View style={[styles.innerRing, { backgroundColor: ring.color, width: ring.innerDiameter, height: ring.innerDiameter }]}>
                {/* Inner content (optional) */}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ring: {
    width: '100%',
    height: '100%',
    borderWidth: 10,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ringProgress: {
    width: '100%',
    height: '100%',
    borderWidth: 10,
    borderRadius: 999,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRing: {
    borderRadius: 999,
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

const ServiceChart = () => {
  const rings = [
    { color: '#F44336', diameter: 120, innerDiameter: 90 }, // Batteries
    { color: '#03A9F4', diameter: 140, innerDiameter: 110 }, // Textile
    { color: '#FFEB3B', diameter: 160, innerDiameter: 130 }, // Paper
    { color: '#4CAF50', diameter: 180, innerDiameter: 150 }, // Boxes
    { color: '#FF5722', diameter: 200, innerDiameter: 170 }, // Wood
    { color: '#9C27B0', diameter: 220, innerDiameter: 190 }, // Steel
    { color: '#2196F3', diameter: 240, innerDiameter: 210 }, // Plastic
    { color: '#FFC107', diameter: 260, innerDiameter: 230 }, // Wheels
    { color: '#607D8B', diameter: 280, innerDiameter: 250 }, // Glass
  ];

  return <ProgressRing rings={rings} />;
};

export default ServiceChart;

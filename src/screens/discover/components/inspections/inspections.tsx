import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Inspections = () => {
  return (
    <View style={styles.container}>
      <Text>Inspections</Text>
    </View>
  );
};

export default Inspections;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

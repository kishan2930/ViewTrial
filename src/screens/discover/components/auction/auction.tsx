import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Auction = () => {
  return (
    <View style={styles.container}>
      <Text>Auction</Text>
    </View>
  );
};

export default Auction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

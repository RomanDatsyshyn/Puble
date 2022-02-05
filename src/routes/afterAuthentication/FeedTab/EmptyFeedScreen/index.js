import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default EmptyFeedScreen = () => {
  return (
    <View style={styles.background}>
      <Text>No one propositions</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default DialogScreen = () => {
  return (
    <View style={styles.background}>
      <Text>No one messages</Text>
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

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../../../../assets/colors';

export const DialogScreen = () => {
  return (
    <View style={styles.background}>
      <Text>No one messages</Text>
    </View>
  );
};

export default DialogScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

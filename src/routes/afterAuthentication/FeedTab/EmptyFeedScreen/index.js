import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../../../../assets/colors';

export const EmptyFeedScreen = () => {
  return (
    <View style={styles.background}>
      <Text>No one propositions</Text>
    </View>
  );
};

export default EmptyFeedScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

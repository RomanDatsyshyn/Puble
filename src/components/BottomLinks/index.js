import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';

const w = Dimensions.get('window').width;

import {colors} from '../../assets/colors';

export default BottomLinks = ({route, firstText, secondText, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={styles.links}>
      <Text style={styles.firstText}>{firstText}</Text>
      <Text style={styles.secondText}>{secondText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  links: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: w * 0.1,
    marginBottom: w * 0.05,
  },
  firstText: {
    color: colors.grey,
    fontSize: w * 0.037,
    fontStyle: 'italic',
  },
  secondText: {
    color: colors.deepBlue,
    textDecorationLine: 'underline',
    marginLeft: w * 0.01,
  },
});

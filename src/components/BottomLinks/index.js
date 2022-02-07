import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, View} from 'react-native';

const w = Dimensions.get('window').width;

export default BottomLinks = ({route, firstText, secondText, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={styles.links}>
      <TextBlock text={firstText} size={6} grey italic />
      <View style={styles.marginLeft}>
        <TextBlock text={secondText} size={6} deepBlue underline />
      </View>
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
  marginLeft: {
    marginLeft: w * 0.01,
  },
});

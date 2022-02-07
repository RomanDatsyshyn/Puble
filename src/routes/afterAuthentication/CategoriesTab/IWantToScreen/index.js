import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;

import {colors} from '../../../../assets/colors';

export default IWantToScreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Button
        label={'Я хочу манік'}
        route={'Feed'}
        navigation={navigation}
        pink
        bold
      />

      <View style={styles.spacing}></View>

      <Button
        label={'Повернутися назад'}
        route={'ListOfServicesScreen'}
        navigation={navigation}
        bold
        leftArrow
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacing: {
    marginTop: w * 0.05,
  },
});

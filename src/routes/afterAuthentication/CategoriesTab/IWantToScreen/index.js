import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Button from '../../../../components/Button';

const w = Dimensions.get('window').width;

import {colors} from '../../../../assets/colors';

import DataService from '../../../../API/HTTP/services/data.service';

export const IWantToScreen = ({route, navigation}) => {
  const {name, services} = route.params;

  const getOrders = async () => {
    try {
      await DataService.getOrders('623da65073deea0ebf9ba44d');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.background}>
      <Button
        label={name}
        onPress={() => {
          getOrders();
          navigation.navigate('Feed');
        }}
        pink
        bold
      />

      <View style={styles.spacing} />

      <Button
        label={'Повернутися назад'}
        onPress={() =>
          navigation.navigate('ListOfServicesScreen', {
            services,
          })
        }
        bold
        leftArrow
      />
    </View>
  );
};

export default IWantToScreen;

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

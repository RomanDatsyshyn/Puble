import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Button from '../../../../components/Button';

const w = Dimensions.get('window').width;

export const ServiceItem = ({name, navigation}) => {
  return (
    <View style={styles.item}>
      <Button
        label={name}
        route={'IWantToScreen'}
        navigation={navigation}
        pink
        bold
      />
    </View>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  item: {
    marginBottom: w * 0.03,
  },
});

import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const w = Dimensions.get('window').width;

export default ServiceItem = ({name, navigation}) => {
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

const styles = StyleSheet.create({
  item: {
    marginBottom: w * 0.03,
  },
});

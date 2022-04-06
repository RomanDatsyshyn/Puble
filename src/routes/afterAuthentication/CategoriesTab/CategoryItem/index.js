import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import {colors} from '../../../../assets/colors';
import TextBlock from '../../../../components/TextBlock';

const w = Dimensions.get('window').width;

export const CategoryItem = ({icon, name, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ListOfServicesScreen')}
      style={styles.item}>
      <View style={styles.itemConteiner}>
        <FontAwesomeIcon icon={Icons[icon]} size={50} style={styles.icon} />
        <TextBlock text={name} size={4} lightBlue boldest />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  item: {
    width: w * 0.37,
    height: w * 0.37,
    borderRadius: w * 0.02,
    backgroundColor: '#fae1dd',
    marginBottom: w * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemIcon: {
    width: w * 0.2,
    height: w * 0.2,
  },
  icon: {
    color: colors.lightBlue,
  },
});

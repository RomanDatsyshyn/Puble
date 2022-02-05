import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {icons} from '../../../../assets/icons';

const w = Dimensions.get('window').width;

export default CategoryItem = ({icon, name, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('ListOfServicesScreen')}
      style={styles.item}>
      <View style={styles.itemConteiner}>
        <Image source={icon} style={styles.itemIcon} />
        <Text style={styles.itemTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
  itemTitle: {
    fontSize: w * 0.05,
    fontWeight: '700',
    color: '#1A374D',
  },
  itemIcon: {
    width: w * 0.2,
    height: w * 0.2,
  },
});

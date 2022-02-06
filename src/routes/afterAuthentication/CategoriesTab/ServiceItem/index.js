import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const w = Dimensions.get('window').width;

export default ServiceItem = ({name, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('IWantToScreen')}
      style={styles.item}>
      <View style={styles.itemConteiner}>
        <Text style={styles.itemTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: w * 0.8,
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: w * 0.03,
    marginBottom: w * 0.03,
    backgroundColor: '#fae1dd',
  },
  itemConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: w * 0.05,
    fontWeight: '500',
    color: '#1A374D',
  },
  itemIcon: {
    width: w * 0.2,
    height: w * 0.2,
  },
});

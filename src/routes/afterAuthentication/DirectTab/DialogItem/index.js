import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {images} from '../../../../assets/images';

const w = Dimensions.get('window').width;

export default DialogItem = ({name, message, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('DialogScreen')}
      style={styles.item}>
      <View style={styles.badge}>
        <Text style={styles.badgeAmount}>2</Text>
      </View>
      <Image source={images.avatar} style={styles.itemPhoto} />
      <View style={styles.itemText}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemMessage}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: w * 0.05,
    borderWidth: 1,
    borderColor: '#fae1dd',
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
  },
  itemText: {
    width: '73%',
  },
  itemPhoto: {
    width: w * 0.15,
    height: w * 0.15,
    borderRadius: w * 0.04,
  },
  itemName: {
    fontSize: w * 0.05,
    fontWeight: '700',
    color: '#1A374D',
    marginBottom: w * 0.01,
  },
  itemMessage: {
    fontSize: w * 0.037,
    fontWeight: '700',
    color: '#a3a3ab',
  },
  badge: {
    width: w * 0.07,
    height: w * 0.07,
    position: 'absolute',
    right: w * 0.03,
    top: w * 0.02,
    backgroundColor: '#fae1dd',
    borderRadius: w * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeAmount: {
    fontSize: w * 0.045,
    color: '#1A374D',
  },
});

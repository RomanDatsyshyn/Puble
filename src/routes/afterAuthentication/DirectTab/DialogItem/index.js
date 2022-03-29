import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const w = Dimensions.get('window').width;

import {images} from '../../../../assets/images';
import {colors} from '../../../../assets/colors';

import TextBlock from '../../../../components/TextBlock';

export const DialogItem = ({name, message, navigation}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('DialogScreen')}
      style={styles.item}>
      <View style={styles.badge}>
        <TextBlock text={'2'} size={4} lightBlue />
      </View>
      <Image source={images.avatar} style={styles.itemPhoto} />
      <View style={styles.itemText}>
        <View style={styles.itemName}>
          <TextBlock text={name} size={3} lightBlue boldest />
        </View>
        <TextBlock text={message} size={6} grey boldest />
      </View>
    </TouchableOpacity>
  );
};

export default DialogItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: w * 0.05,
    borderWidth: 1,
    borderColor: colors.pink,
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
    marginBottom: w * 0.01,
  },
  badge: {
    width: w * 0.07,
    height: w * 0.07,
    position: 'absolute',
    right: w * 0.03,
    top: w * 0.02,
    backgroundColor: colors.pink,
    borderRadius: w * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

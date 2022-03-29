import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import TextBlock from '../../../../components/TextBlock';

import {icons} from '../../../../assets/icons';
import {images} from '../../../../assets/images';
import {colors} from '../../../../assets/colors';

const w = Dimensions.get('window').width;

export const FeedItem = () => {
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <Image source={images.avatar} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <View>
            <TextBlock text={'Світлана'} size={3} deepBlue />
            <TextBlock text={'Перукар'} size={6} grey />
          </View>

          <View>
            <View style={styles.row}>
              <Image source={icons.uah} style={styles.itemUahIcon} />
              <TextBlock text={'150 - 200 грн'} size={5} deepBlue />
            </View>

            <View style={styles.row}>
              <Image source={icons.location} style={styles.itemLocationIcon} />

              <View style={styles.itemDistance}>
                <TextBlock text={'270 м. -'} size={5} deepBlue />
              </View>

              <TouchableOpacity style={styles.itemMap} activeOpacity={0.7}>
                <TextBlock text={'див. на карті'} size={5} orange />
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <Image source={icons.rating} style={styles.itemLocationIcon} />
              <TextBlock text={'Рейтинг - 6.2 із 10'} size={5} deepBlue />
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <TextBlock text={'Надіслати повідомлення'} size={3} deepBlue />
      </TouchableOpacity>

      <TouchableOpacity style={styles.close} activeOpacity={0.7}>
        <Image source={icons.close} style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: w * 0.1,
  },
  row: {
    flexDirection: 'row',
  },
  itemImage: {
    width: w * 0.32,
    height: w * 0.32,
    borderRadius: w * 0.02,
  },
  itemInfo: {
    marginLeft: w * 0.05,
    justifyContent: 'space-between',
  },
  itemDistance: {
    marginBottom: w * 0.01,
  },
  itemLocationIcon: {
    width: w * 0.05,
    height: w * 0.05,
    marginRight: w * 0.02,
  },
  itemUahIcon: {
    width: w * 0.045,
    height: w * 0.045,
    marginRight: w * 0.02,
  },
  itemMap: {
    marginLeft: w * 0.01,
  },
  button: {
    width: '100%',
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.035,
    paddingBottom: w * 0.035,
    borderRadius: w * 0.02,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: w * 0.03,
  },
  close: {
    position: 'absolute',
    top: w * 0.005,
    right: w * 0.025,
  },
  closeIcon: {
    width: w * 0.05,
    height: w * 0.05,
  },
});

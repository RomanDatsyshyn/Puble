import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {images} from '../../../../assets/images';
import {icons} from '../../../../assets/icons';

const w = Dimensions.get('window').width;

export default FeedItem = () => {
  return (
    <View style={styles.item}>
      <View style={styles.row}>
        <Image source={images.avatar} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <View>
            <Text style={styles.itemName}>Світлана</Text>
            <Text style={styles.itemTypeOfService}>Перукар</Text>
          </View>

          <View>
            <View style={styles.row}>
              <Image source={icons.location} style={styles.itemLocationIcon} />
              <Text style={styles.itemDistance}>270 м. -</Text>
              <TouchableOpacity style={styles.itemMap} activeOpacity={0.7}>
                <Text style={styles.itemMapLink}>див. на карті </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <Image source={icons.rating} style={styles.itemLocationIcon} />
              <Text style={styles.itemRating}>Рейтинг - 6.2 із 10</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Text style={styles.buttonText}>Надіслати повідомлення</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.close} activeOpacity={0.7}>
        <Image source={icons.close} style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: w * 0.1,
  },
  row: {
    flexDirection: 'row',
  },
  itemImage: {
    width: w * 0.25,
    height: w * 0.25,
    borderRadius: w * 0.02,
  },
  itemInfo: {
    marginLeft: w * 0.05,
    justifyContent: 'space-between',
  },
  itemName: {
    color: '#27272f',
    fontSize: w * 0.05,
  },
  itemTypeOfService: {
    color: '#a3a3ab',
    fontSize: w * 0.035,
  },
  itemDistance: {
    color: '#27272f',
    fontSize: w * 0.04,
    marginBottom: w * 0.01,
  },
  itemStreet: {
    color: '#a3a3ab',
    fontSize: w * 0.035,
  },
  itemRating: {
    color: '#27272f',
    fontSize: w * 0.04,
  },
  itemLocationIcon: {
    width: w * 0.05,
    height: w * 0.05,
    marginRight: w * 0.02,
  },
  itemMap: {
    marginLeft: w * 0.01,
  },
  itemMapLink: {
    color: '#f69b76',
    fontSize: w * 0.04,
  },
  button: {
    width: '100%',
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.035,
    paddingBottom: w * 0.035,
    borderRadius: w * 0.02,
    backgroundColor: '#fae1dd',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: w * 0.03,
  },
  buttonText: {
    color: '#27272f',
    fontWeight: '400',
    fontSize: w * 0.05,
    marginRight: w * 0.01,
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

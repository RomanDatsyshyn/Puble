import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

import {images} from '../../../assets/images';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default FeedTab = () => {
  return (
    <View style={styles.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.item}>
          <View style={styles.row}>
            <Image source={images.avatar} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <View>
                <Text style={styles.itemName}>Світлана</Text>
                <Text style={styles.itemTypeOfService}>Перукар</Text>
              </View>
              <View>
                <Text style={styles.itemDistance}>270 м. від вас</Text>
                <Text style={styles.itemRating}>Рейтинг - 4.2 із 10</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Звязатися</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: w * 0.05,
  },
  container: {
    width: w * 0.95,
    height: h,
  },
  item: {
    width: '100%',
    marginBottom: w * 0.03,
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
  itemRating: {
    color: '#27272f',
    fontSize: w * 0.04,
  },
  itemDistance: {
    color: '#27272f',
    fontSize: w * 0.04,
  },
  button: {
    width: '100%',
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
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
});

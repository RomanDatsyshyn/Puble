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
              <Text>
                Світлана
                <Text>(4.3)</Text>
              </Text>
              <Text>Перукар</Text>
              <Text>270 м.</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Звязатися</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
        <View style={styles.item}></View>
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
    paddingTop: w * 0.03,
  },
  container: {
    width: w * 0.95,
    height: h,
  },
  item: {
    width: '100%',
    height: w * 0.5,
    backgroundColor: 'red',
    marginBottom: w * 0.03,
  },
  row: {
    flexDirection: 'row',
  },
  itemImage: {
    width: w * 0.25,
    height: w * 0.25,
  },
  itemInfo: {
    marginLeft: w * 0.05,
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
    color: '#1A374D',
    fontWeight: '400',
    fontSize: w * 0.05,
    marginRight: w * 0.01,
  },
});

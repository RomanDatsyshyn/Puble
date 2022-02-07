import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import FeedItem from './FeedItem';

import {colors} from '../../../assets/colors';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default FeedTab = () => {
  return (
    <View style={styles.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.spacing}></View>
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: w * 0.95,
    height: h,
  },
  spacing: {
    height: w * 0.05,
  },
});

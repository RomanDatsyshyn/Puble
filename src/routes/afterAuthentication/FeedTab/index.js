import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';

import FeedItem from './FeedItem';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default FeedTab = () => {
  return (
    <View style={styles.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: w * 0.05,
  },
  container: {
    width: w * 0.95,
    height: h,
  },
});

import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text} from 'react-native';

import FeedItem from './FeedItem';

import {colors} from '../../../assets/colors';
import DataService from '../../../API/HTTP/services/data.service';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const FeedTab = () => {
  const [offers, setOffers] = useState([]);

  const getOffers = useCallback(async () => {
    try {
      const {data} = await DataService.subscribe();
      setOffers(data);
      await getOffers();
    } catch (e) {
      setTimeout(() => {
        getOffers();
      }, 500);
    }
  }, []);

  useEffect(() => {
    getOffers();
  }, [getOffers]);

  return (
    <View style={styles.background}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {offers && offers.map((mess, index) => <Text key={index}>{mess}</Text>)}
        <View style={styles.spacing} />
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

export default FeedTab;

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

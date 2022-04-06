import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

// import FeedItem from './FeedItem';

import {colors} from '../../../assets/colors';
import DataService from '../../../API/HTTP/services/data.service';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const FeedTab = ({route}) => {
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const isFocused = useIsFocused();

  const getOffers = useCallback(async () => {
    try {
      offers.length === 0 ? setIsLoading(true) : setIsLoading(false);

      const {data} = await DataService.subscribe();
      setOffers(data);

      await getOffers();
    } catch (e) {
      setTimeout(() => {
        getOffers();
      }, 500);
    }
  }, [offers.length]);

  const getUserFeed = async () => {
    await DataService.getUserData()
      .then(res => {
        if (res.data.success) {
          const {feed} = res.data.data;
          setOffers(feed);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserFeed();
  }, []);

  useEffect(() => {
    if (route.params !== undefined) {
      const {isStart} = route.params;

      if (isStart) {
        getOffers();
      }
    }
    if (isFocused && route.params === undefined) {
      if (offers.length !== 0) {
        getOffers();
      }
    }
  }, [isFocused, offers.length, route.params, getOffers]);

  return (
    <View style={styles.background}>
      {offers?.length > 0 && (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          {/* {offers &&
            offers.map((id, index) => <FeedItem id={id} key={index} />)} */}
          {offers &&
            offers.map((id, index) => <Text key={index}>{index}</Text>)}
          <View style={styles.spacing} />
        </ScrollView>
      )}
      {offers.length === 0 && !isLoading && <Text>No one propositions</Text>}
      {isLoading && <Text>Loading</Text>}
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
    paddingTop: w * 0.04,
    width: w * 0.95,
    height: h,
  },
  spacing: {
    height: w * 0.05,
  },
});

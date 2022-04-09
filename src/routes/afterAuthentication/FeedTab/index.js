import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
const {io} = require('socket.io-client');

// import FeedItem from './FeedItem';

import {colors} from '../../../assets/colors';
import DataService from '../../../API/HTTP/services/data.service';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const FeedTab = ({route}) => {
  const [feed, setFeed] = useState([]);

  const socket = io('ws://localhost:3001');

  const connect = id => {
    socket.emit('join', {room: `userFeed-${id}`});
    socket.on('message', messages => setFeed(messages));
  };

  const getUserFeed = async () => {
    await DataService.getUserData()
      .then(res => {
        const {success, data} = res.data;
        if (success) {
          setFeed(data.feed);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserFeed();
  }, []);

  return (
    <View style={styles.background}>
      {feed?.length > 0 && (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          {feed?.map((id, index) => (
            <Text key={index}>
              {index} - {id}
            </Text>
          ))}
          {
            <TouchableOpacity
              onPress={() => connect('62486b2ccc97633ca1a504c4')}>
              <Text>Sign In</Text>
            </TouchableOpacity>
          }
          <View style={styles.spacing} />
        </ScrollView>
      )}
      {feed.length === 0 && <Text>No one propositions</Text>}
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

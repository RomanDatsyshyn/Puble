import React, {useEffect, useState, useCallback} from 'react';
import {
  AppState,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
} from 'react-native';
const {io} = require('socket.io-client');

// import FeedItem from './FeedItem';

import {colors} from '../../../assets/colors';
import DataService from '../../../API/HTTP/services/data.service';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const FeedTab = ({route}) => {
  const [feed, setFeed] = useState([]);
  const [connected, setConnected] = useState(false);
  const [appState, setAppState] = useState('');

  const socket = io('ws://localhost:3001');

  useEffect(() => {
    AppState.addEventListener('change', handleChange);
  }, [handleChange]);

  const handleChange = useCallback(
    newState => {
      if (newState === 'active') {
        if (appState !== 'active') {
          // console.log('Reconnect');
          connect('62486b2ccc97633ca1a504c4');
        }
        setAppState(newState);
      }
      if (newState === 'background' || newState === 'inactive') {
        // console.log('Unsubscribe');
        setAppState(newState);
        unsubscribe('62486b2ccc97633ca1a504c4');
      }
    },
    [appState, connect, unsubscribe],
  );

  const connect = useCallback(
    id => {
      socket.emit('join', {room: `userFeed-${id}`});
      socket.on('message', data => setFeed(data));
    },
    [socket],
  );

  const unsubscribe = useCallback(
    id => {
      socket.emit('unsubscribe', {room: `userFeed-${id}`});
    },
    [socket],
  );

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

  useEffect(() => {
    if (!connected) {
      connect('62486b2ccc97633ca1a504c4');
      setConnected(true);
    }
  }, [connected, connect]);

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

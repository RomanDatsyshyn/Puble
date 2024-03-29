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

import FeedItem from './FeedItem';

import {colors} from '../../../assets/colors';
import DataService from '../../../API/HTTP/services/data.service';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const FeedTab = ({route}) => {
  const [userId, setUserId] = useState('');
  const [feed, setFeed] = useState([]);
  const [connected, setConnected] = useState(false);
  const [appState, setAppState] = useState('');

  const socket = io('ws://localhost:3001');

  useEffect(() => {
    AppState.addEventListener('change', handleChange);
  }, [handleChange]);

  const getUserRequest = async () => {
    await DataService.getUserData()
      .then(res => {
        if (res.data.success) {
          setUserId(res.data.data.id);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserRequest();
  }, []);

  const handleChange = useCallback(
    newState => {
      if (newState === 'active') {
        if (appState !== 'active' && userId !== '') {
          // Reconnect
          connect(userId);
        }
        setAppState(newState);
      }
      if (
        newState === 'background' ||
        (newState === 'inactive' && userId !== '')
      ) {
        // Unsubscribe
        setAppState(newState);
        unsubscribe(userId);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [appState, connect, unsubscribe],
  );

  const connect = useCallback(
    id => {
      socket.emit('join', {room: `userFeed-${id}`});
      socket.on('message', data => {
        setFeed(data);
        console.log(2);
      });
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
    if (!connected && userId !== '') {
      connect(userId);
      setConnected(true);
    }
  }, [connected, connect, userId]);

  return (
    <View style={styles.background}>
      {feed?.length > 0 && (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}>
          {feed?.map((item, index) => (
            <FeedItem item={item} key={index} />
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

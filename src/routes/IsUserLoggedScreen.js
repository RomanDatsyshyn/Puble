import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import {colors} from '../assets/colors';
import {getToken, setToken} from '../asyncStorage/token';

export const IsUserLoggedScreen = ({navigation}) => {
  const setTokenToStorage = async token => {
    await setToken(token);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = await getToken();

      if (token) {
        const response = await fetch('http://localhost:3001/user/checkToken', {
          method: 'GET',
          headers: {
            Authorization: token,
          },
        });

        let res = await response.json();

        if (res.success) {
          navigation.navigate('TabNavigation');
        } else {
          const response2 = await fetch(
            'http://localhost:3001/user/checkToken',
            {
              method: 'GET',
              headers: {
                Authorization: token,
              },
            },
          );

          let res2 = await response2.json();

          if (res2.success) {
            setTokenToStorage(res2.data.access_token);
            navigation.navigate('TabNavigation');
          }
        }
      } else {
        navigation.navigate('WelcomeScreen');
      }
    };
    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} color={colors.black} />
    </View>
  );
};

export default IsUserLoggedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
  },
});

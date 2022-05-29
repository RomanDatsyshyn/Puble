import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

import {colors} from '../assets/colors';
import {getToken} from '../asyncStorage/token';

export const IsUserLoggedScreen = ({navigation}) => {
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
          // refresh
          // remove old token
          // set new one
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

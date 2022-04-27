import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {colors} from '../../../assets/colors';
export const DirectTabScreen = ({navigation}) => {
  useEffect(() => {
    2 > 1
      ? navigation.navigate('EmptyDirectScreen')
      : navigation.navigate('DirectScreen');
  }, [navigation]);

  // const getUserFeed = async () => {
  //   await DataService.getUserData()
  //     .then(res => {
  //       const {success, data} = res.data;
  //       if (success) {
  //         setFeed(data.feed);
  //       }
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  // useEffect(() => {
  //   getUserFeed();
  // }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} color={colors.deepBlue} />
    </View>
  );
};
export default DirectTabScreen;

const styles = StyleSheet.create({
  container: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

import {clearToken} from '../../../asyncStorage/token';
import DataService from '../../../API/HTTP/services/data.service';

import Button from '../../../components/Button';
import TextBlock from '../../../components/TextBlock';

import {images} from '../../../assets/images';
import {colors} from '../../../assets/colors';

const w = Dimensions.get('window').width;

export const ProfileTab = ({navigation}) => {
  const logout = async () => {
    await DataService.logout();
    await clearToken();
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={images.avatar} style={styles.userPhoto} />

        <View style={styles.userName}>
          <TextBlock text={'Орися'} size={1} lightBlue boldest />
        </View>

        <Button
          label={'Змінити пароль'}
          route={'ForgetPasswordScreen'}
          navigation={navigation}
          pink
        />
        <View style={styles.spacing} />
        <Button
          label={'Історія запитів'}
          route={'RegistrationScreen'}
          navigation={navigation}
          pink
        />

        <View style={styles.moreSpacing} />

        <Button label={'Вийти'} onPress={() => logout()} />
      </View>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userPhoto: {
    width: w * 0.35,
    height: w * 0.35,
    borderRadius: w * 0.5,
    marginBottom: w * 0.02,
  },
  userName: {
    marginBottom: w * 0.12,
  },
  container: {
    width: w * 0.8,
    alignItems: 'center',
  },
  spacing: {
    marginTop: w * 0.05,
  },
  moreSpacing: {
    marginTop: w * 0.1,
  },
});

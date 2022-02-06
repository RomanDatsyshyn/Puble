import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import {images} from '../../../assets/images';

const w = Dimensions.get('window').width;

export default ProfileTab = ({navigation}) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={images.avatar} style={styles.userPhoto} />

        <Text style={styles.userName}>Орися</Text>

        <Button
          label={'Змінити пароль'}
          route={'ForgetPasswordScreen'}
          navigation={navigation}
          pink
        />

        <View style={styles.spacing}></View>

        <Button
          label={'Історія запитів'}
          route={'RegistrationScreen'}
          navigation={navigation}
          pink
        />

        <View style={styles.moreSpacing}></View>

        <Button label={'Вийти'} route={'LoginScreen'} navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
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
    fontSize: w * 0.09,
    fontWeight: '700',
    color: '#1A374D',
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

import React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';

import {images} from '../assets/images';
import {colors} from '../assets/colors';

import Button from '../components/Button';
import TextBlock from '../components/TextBlock';
import BottomLinks from '../components/BottomLinks';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const WelcomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.background}>
        <Image source={images.welcomeBoy} style={styles.image} />

        <View style={styles.labels}>
          <TextBlock text={'Забудь про пошук!'} size={2} deepBlue bolder />
          <TextBlock text={'Тепер є Ми.'} size={2} deepBlue bolder />
        </View>

        <Image source={images.logo} style={styles.logo} />

        <View style={styles.container}>
          <View style={styles.labelForSignIn}>
            <TextBlock text={'Я вже є в Puble'} size={5} lighter />
          </View>

          <Button
            label={'Заходь, друже :)'}
            route={'LoginScreen'}
            navigation={navigation}
          />

          <View style={styles.labelForSignUp}>
            <TextBlock text={'Мене ще немає...'} size={5} lighter />
          </View>

          <Button
            label={'Хутчіш приєднуйся!'}
            route={'RegistrationScreen'}
            navigation={navigation}
            pink
          />

          <BottomLinks
            firstText={'Не маєте профілю?'}
            secondText={'Створіть його!'}
            route={'RegistrationScreen'}
            navigation={navigation}
          />
        </View>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.pink,
    justifyContent: 'flex-end',
  },
  labels: {
    position: 'absolute',
    bottom: h * 0.53,
    left: w * 0.075,
  },
  image: {
    width: w * 0.32,
    height: h * 0.35,
    alignSelf: 'flex-end',
    marginRight: w * 0.05,
    marginBottom: w * 0.05,
  },
  logo: {
    position: 'absolute',
    width: w * 0.5,
    height: h * 0.11,
    top: h * 0.07,
    alignSelf: 'center',
    marginBottom: w * 0.03,
  },
  container: {
    height: h * 0.45,
    backgroundColor: colors.white,
    borderTopLeftRadius: w * 0.08,
    borderTopRightRadius: w * 0.08,
    alignItems: 'center',
  },
  labelForSignIn: {
    alignSelf: 'flex-end',
    marginRight: w * 0.13,
    marginTop: w * 0.12,
    marginBottom: w * 0.025,
    opacity: 0.9,
  },
  labelForSignUp: {
    marginTop: w * 0.08,
    alignSelf: 'flex-start',
    marginLeft: w * 0.13,
    marginBottom: w * 0.025,
    opacity: 0.9,
  },
});

import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import {images} from '../assets/images';

import TextBlock from '../components/TextBlock';
import Button from '../components/Button';
import BottomLinks from '../components/BottomLinks';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default WelcomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.background}>
        <Image source={images.welcomeBoy} style={styles.image} />

        <View style={styles.labels}>
          <TextBlock text={'Забудь про пошук!'} size={2} bolder />
          <TextBlock text={'Тепер є Ми.'} size={2} bolder />
        </View>

        <Image source={images.logo} style={styles.logo} />

        <View style={styles.container}>
          <Text style={styles.labelForSignIn}>Я вже є в Puble</Text>

          <Button
            label={'Заходь, друже :)'}
            route={'LoginScreen'}
            navigation={navigation}
          />

          <Text style={styles.labelForSignUp}>Мене ще немає...</Text>

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fae1dd',
    justifyContent: 'flex-end',
  },
  labels: {
    position: 'absolute',
    bottom: h * 0.53,
    left: w * 0.075,
  },
  title: {
    fontSize: w * 0.07,
    color: '#27272f',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: w * 0.07,
    marginLeft: w * 0.015,
    color: '#27272f',
    fontWeight: '600',
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
    backgroundColor: '#fff',
    borderTopLeftRadius: w * 0.08,
    borderTopRightRadius: w * 0.08,
    alignItems: 'center',
  },
  labelForSignIn: {
    fontSize: w * 0.04,
    alignSelf: 'flex-end',
    marginRight: w * 0.13,
    marginTop: w * 0.12,
    marginBottom: w * 0.025,
    fontWeight: '300',
    opacity: 0.9,
  },
  labelForSignUp: {
    marginTop: w * 0.08,
    fontSize: w * 0.04,
    alignSelf: 'flex-start',
    marginLeft: w * 0.13,
    marginBottom: w * 0.025,
    fontWeight: '300',
    opacity: 0.9,
  },
});

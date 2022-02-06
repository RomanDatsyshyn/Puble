import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {images} from '../assets/images';
import Button from '../components/Button';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default WelcomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.background}>
        <Image source={images.welcomeBoy} style={styles.image} />

        <View style={styles.labels}>
          <Text style={styles.title}>Забудь про пошук!</Text>
          <Text style={styles.subTitle}>Тепер є Ми.</Text>
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

          <View style={styles.contactUsContainer}>
            <Text style={styles.contactUsQuestion}>Виникли запитання?</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.contactUs}>Напишіть нам</Text>
            </TouchableOpacity>
          </View>
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
  contactUsContainer: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    bottom: h * 0.045,
  },
  contactUsQuestion: {
    color: '#b2b2ba',
    fontStyle: 'italic',
  },
  contactUs: {
    marginTop: w * 0.02,
    color: '#27272f',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});

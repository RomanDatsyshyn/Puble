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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.signInButton}
            onPress={() => navigation.navigate('DetailsScreen')}>
            <Text style={styles.signInText}>Заходь, друже :)</Text>
          </TouchableOpacity>

          <Text style={styles.labelForSignUp}>Мене ще немає...</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.signUpButton}
            onPress={() => navigation.navigate('DetailsScreen')}>
            <Text style={styles.signUpText}>Хутчіш приєднуйся!</Text>
          </TouchableOpacity>

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
    fontSize: w * 0.075,
    color: '#27272f',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: w * 0.075,
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
  signInButton: {
    borderColor: '#27272f',
    borderWidth: 1,
    width: w * 0.8,
    height: w * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: w * 0.035,
    marginBottom: w * 0.08,
  },
  signUpButton: {
    width: w * 0.8,
    height: w * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fae1dd',
    borderRadius: w * 0.035,
  },
  signInText: {
    fontSize: w * 0.045,
    color: '#27272f',
  },
  signUpText: {
    fontSize: w * 0.045,
    color: '#27272f',
  },
  labelForSignIn: {
    fontSize: w * 0.039,
    alignSelf: 'flex-end',
    marginRight: w * 0.13,
    marginTop: w * 0.12,
    marginBottom: w * 0.025,
    fontWeight: '300',
    opacity: 0.9,
  },
  labelForSignUp: {
    fontSize: w * 0.039,
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
    color: '#000',
    opacity: 0.9,
    fontStyle: 'italic',
  },
});

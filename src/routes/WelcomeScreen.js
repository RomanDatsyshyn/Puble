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
          {/* <Text>Вже маєте акаунт?</Text> */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.signInButton}
            onPress={() => navigation.navigate('DetailsScreen')}>
            <Text style={styles.signInText}>Увійти</Text>
          </TouchableOpacity>
          {/* <Text>Вже маєте акаунт?</Text> */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.signUpButton}
            onPress={() => navigation.navigate('DetailsScreen')}>
            <Text style={styles.signUpText}>Зареєструватися</Text>
          </TouchableOpacity>
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
    // color: '#4d4d4d',
  },
  subTitle: {
    fontSize: w * 0.075,
    marginLeft: w * 0.015,
    color: '#27272f',
    fontWeight: '600',
    // color: '#4d4d4d',
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
    justifyContent: 'center',
  },
  signInButton: {
    borderColor: '#cecece',
    borderWidth: 1,
    width: w * 0.8,
    height: w * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: w * 0.035,
    marginBottom: w * 0.035,
  },
  signUpButton: {
    width: w * 0.8,
    height: w * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4d4d4d',
    borderRadius: w * 0.035,
  },
  signInText: {
    fontSize: w * 0.045,
    color: '#000',
  },
  signUpText: {
    fontSize: w * 0.045,
    color: '#fff',
  },
});

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {images} from '../../../assets/images';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default ProfileTab = ({navigation}) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Image source={images.avatar} style={styles.userPhoto} />

        <Text style={styles.userName}>Орися</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signUpButton}
          onPress={() => navigation.navigate('ForgetPasswordScreen')}>
          <Text style={styles.signUpText}>Змінити пароль</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signUpButton}
          onPress={() => navigation.navigate('RegistrationScreen')}>
          <Text style={styles.signUpText}>Історія запитів</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signInButton}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signInText}>Вийти</Text>
        </TouchableOpacity>
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
  signUpButton: {
    width: w * 0.8,
    height: w * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fae1dd',
    borderRadius: w * 0.03,
    marginBottom: w * 0.05,
  },
  signUpText: {
    fontSize: w * 0.045,
    color: '#27272f',
  },
  signInButton: {
    borderColor: '#27272f',
    borderWidth: 1,
    width: w * 0.8,
    height: w * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: w * 0.03,
    marginTop: w * 0.13,
  },
  signInText: {
    fontSize: w * 0.045,
    color: '#27272f',
  },
});

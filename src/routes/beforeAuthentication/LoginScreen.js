import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';

import {icons} from '../../assets/icons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default LoginScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.background}>
        <TouchableOpacity
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={styles.backButton}>
          <Image source={icons.leftArrow} style={styles.backIcon} />
        </TouchableOpacity>

        <View>
          <View style={styles.labels}>
            <Text style={styles.title}>Увійдіть до</Text>
            <Text style={styles.title}>Puble</Text>
            <Text style={styles.subTitle}>Заповніть поля нижче</Text>
          </View>

          <View>
            <Text style={styles.inputLabel}>Логін:</Text>

            <TextInput
              returnKeyType={'done'}
              placeholder="Введіть номер телефону"
              placeholderTextColor={'#a3a3ab'}
              style={styles.input}
              value={login}
              onChangeText={e => setLogin(e)}
            />

            <View style={styles.someSpace}></View>

            <Text style={styles.inputLabel}>Пароль:</Text>

            <TextInput
              returnKeyType={'done'}
              placeholder="Введіть ваш пароль"
              placeholderTextColor={'#a3a3ab'}
              style={styles.input}
              value={password}
              onChangeText={e => setPassword(e)}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPasswordScreen')}
              style={styles.forgetPassword}>
              <Text style={styles.forgetPasswordText}>Забули пароль?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TabNavigation')}
              activeOpacity={0.7}
              style={styles.sendCode}>
              <Text style={styles.sendCodeText}>Увійти</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('RegistrationScreen')}
              style={styles.createProfile}>
              <Text style={styles.createProfileText}>
                Не маєте профілю?{' '}
                <Text style={styles.textBlack}>Створіть його!</Text>
              </Text>
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
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labels: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: w * 0.09,
    fontWeight: '700',
    color: '#1A374D',
  },
  subTitle: {
    color: '#a3a3ab',
    fontWeight: '500',
    fontSize: w * 0.041,
    marginTop: w * 0.02,
    marginBottom: w * 0.15,
  },
  inputLabel: {
    fontSize: w * 0.041,
    fontWeight: '500',
    marginBottom: w * 0.03,
    marginLeft: w * 0.01,
  },
  input: {
    width: w * 0.8,
    fontSize: w * 0.045,
    padding: 5,
    color: '#27272f',
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    borderWidth: 1,
  },
  someSpace: {
    marginBottom: w * 0.07,
  },
  forgetPassword: {
    alignItems: 'flex-end',
    marginTop: w * 0.03,
    marginRight: w * 0.02,
  },
  forgetPasswordText: {
    color: '#27272f',
    fontSize: w * 0.037,
    textDecorationLine: 'underline',
  },
  createProfile: {
    alignSelf: 'center',
    marginTop: w * 0.2,
  },
  createProfileText: {
    color: '#a3a3ab',
    fontSize: w * 0.037,
    fontStyle: 'italic',
  },
  backButton: {
    position: 'absolute',
    top: h * 0.07,
    left: w * 0.07,
  },
  backIcon: {
    width: w * 0.09,
    height: w * 0.09,
  },
  sendCode: {
    width: w * 0.8,
    flexDirection: 'row',
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    justifyContent: 'center',
    backgroundColor: '#fae1dd',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: w * 0.1,
  },
  sendCodeText: {
    color: '#27272f',
    fontWeight: '500',
    fontSize: w * 0.05,
    marginRight: w * 0.01,
  },
  toRightIcon: {
    width: w * 0.05,
    height: w * 0.05,
  },
  textBlack: {
    color: '#27272f',
    textDecorationLine: 'underline',
  },
});

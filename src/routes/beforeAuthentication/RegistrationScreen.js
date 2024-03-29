import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

import {icons} from '../../assets/icons';
import {colors} from '../../assets/colors';
import {getPhoneMask} from '../../components/common';

import Input from '../../components/Input';
import Button from '../../components/Button';
import AlertBox from '../../components/Alert';
import TextBlock from '../../components/TextBlock';
import BottomLinks from '../../components/BottomLinks';

import DataService from '../../API/HTTP/services/data.service';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const RegistrationScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const isNameCorrect = name.length < 2;
  const isPhoneCorrect = phone.length < 10;
  const isEmailCorrect = !email.includes('@');
  const isPasswordCorrect = password.length < 5;

  const registrationRequest = async data => {
    await DataService.register(data)
      .then(res => {
        res.data.success
          ? navigation.navigate('LoginScreen')
          : AlertBox('Failed registration', res.data.errors);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const signUp = () => {
    registrationRequest({
      name,
      phone,
      email,
      password,
    });
  };

  const basicValidation = () => {
    setNameErrorMessage('');
    setPhoneErrorMessage('');
    setEmailErrorMessage('');
    setPasswordErrorMessage('');

    isNameCorrect && setNameErrorMessage('Введіть мінімум 2 літери');
    isPhoneCorrect && setPhoneErrorMessage('Введіть мінімум 10 цифр');
    isEmailCorrect && setEmailErrorMessage('Введіть email коректно');
    isPasswordCorrect && setPasswordErrorMessage('Введіть мінімум 5 символів');

    !isNameCorrect &&
      !isPhoneCorrect &&
      !isEmailCorrect &&
      !isPasswordCorrect &&
      signUp();
  };

  useEffect(() => {
    nameErrorMessage !== '' && !isNameCorrect && setNameErrorMessage('');
  }, [nameErrorMessage, setNameErrorMessage, isNameCorrect]);

  useEffect(() => {
    phoneErrorMessage !== '' && !isPhoneCorrect && setPhoneErrorMessage('');
  }, [phoneErrorMessage, setPhoneErrorMessage, isPhoneCorrect]);

  useEffect(() => {
    emailErrorMessage !== '' && !isEmailCorrect && setEmailErrorMessage('');
  }, [emailErrorMessage, setEmailErrorMessage, isEmailCorrect]);

  useEffect(() => {
    passwordErrorMessage !== '' &&
      !isPasswordCorrect &&
      setPasswordErrorMessage('');
  }, [passwordErrorMessage, setPasswordErrorMessage, isPasswordCorrect]);

  return (
    <SafeAreaView style={styles.backgroundSafeArea}>
      <InputScrollView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.background}>
            <View>
              <View style={styles.labels}>
                <TextBlock
                  text={'Станьте частиною'}
                  size={1}
                  lightBlue
                  boldest
                />
                <TextBlock text={'Puble'} size={1} lightBlue boldest />

                <View style={styles.subTitle}>
                  <TextBlock
                    text={'Заповніть всі поля нижче'}
                    size={5}
                    grey
                    bold
                  />
                </View>
              </View>

              <View>
                <Input
                  label={'Як вас звати?'}
                  isShowLabel={true}
                  placeholder="Введіть своє ім'я"
                  error={nameErrorMessage}
                  value={name}
                  onChange={e => setName(e)}
                />

                <View style={styles.someSpace} />

                <Input
                  label={'Ваш номер телефону:'}
                  isShowLabel={true}
                  placeholder="067 777 77 77"
                  error={phoneErrorMessage}
                  keyboardType={'number-pad'}
                  value={getPhoneMask(phone)}
                  onChange={e => setPhone(e)}
                />

                <View style={styles.someSpace} />

                <Input
                  label={'Ваш Email:'}
                  isShowLabel={true}
                  placeholder="Example@example.com"
                  error={emailErrorMessage}
                  value={email}
                  onChange={e => setEmail(e)}
                />

                <View style={styles.someSpace} />

                <Input
                  label={'Пароль:'}
                  isShowLabel={true}
                  placeholder="Введіть ваш пароль"
                  error={passwordErrorMessage}
                  value={password}
                  onChange={e => setPassword(e)}
                />

                <View style={styles.someSpace} />

                <Button
                  label={'Зареєструватися'}
                  onPress={() => basicValidation()}
                  pink
                  bold
                />

                <BottomLinks
                  firstText={'Маєте запитання?'}
                  secondText={'Напишіть нам!'}
                  route={'RegistrationScreen'}
                  navigation={navigation}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('WelcomeScreen')}
            style={styles.backButton}>
            <Image source={icons.leftArrow} style={styles.backIcon} />
          </TouchableOpacity>
        </ScrollView>
      </InputScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  backgroundSafeArea: {
    backgroundColor: colors.white,
  },
  background: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labels: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: w * 0.13,
  },
  subTitle: {
    marginTop: w * 0.02,
    marginBottom: w * 0.15,
  },
  someSpace: {
    marginBottom: w * 0.07,
  },
  backButton: {
    position: 'absolute',
    top: h * 0.01,
    left: w * 0.07,
  },
  backIcon: {
    width: w * 0.09,
    height: w * 0.09,
  },
  spacing: {
    marginTop: w * 0.1,
  },
});

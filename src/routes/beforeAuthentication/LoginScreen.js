import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {icons} from '../../assets/icons';

import Input from '../../components/Input';
import Button from '../../components/Button';
import BottomLinks from '../../components/BottomLinks';

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
            <Input
              label="Логін:"
              isShowLabel={true}
              placeholder="Введіть номер телефону"
              value={login}
              onChange={e => setLogin(e)}
            />

            <View style={styles.someSpace}></View>

            <Input
              label="Пароль:"
              isShowLabel={true}
              placeholder="Введіть ваш пароль"
              value={password}
              onChange={e => setPassword(e)}
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPasswordScreen')}
              style={styles.forgetPassword}>
              <Text style={styles.forgetPasswordText}>Забули пароль?</Text>
            </TouchableOpacity>

            <Button
              label={'Увійти'}
              route={'TabNavigation'}
              navigation={navigation}
              pink
              bold
            />

            <View style={styles.someSpace}></View>

            <BottomLinks
              firstText={'Не маєте профілю?'}
              secondText={'Створіть його!'}
              route={'RegistrationScreen'}
              navigation={navigation}
            />
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
    fontSize: w * 0.04,
    marginTop: w * 0.02,
    marginBottom: w * 0.15,
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
    marginBottom: w * 0.1,
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
});

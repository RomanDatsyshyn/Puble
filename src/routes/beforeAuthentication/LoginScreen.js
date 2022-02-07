import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {icons} from '../../assets/icons';
import {colors} from '../../assets/colors';

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
            <TextBlock text={'Увійдіть до'} size={1} lightBlue boldest />
            <TextBlock text={'Puble'} size={1} lightBlue boldest />

            <View style={styles.subTitle}>
              <TextBlock text={'Заповни всі поля нижче'} size={5} grey bold />
            </View>
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
              <View style={styles.forgetPasswordText}>
                <TextBlock
                  text={'Забули пароль?'}
                  size={6}
                  deepBlue
                  underline
                />
              </View>
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
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labels: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    color: colors.grey,
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

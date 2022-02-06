import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {icons} from '../../../../assets/icons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

import Input from '../../../../components/Input';

export default NewPasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <>
      <View style={styles.background}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgetPasswordScreen')}
          style={styles.backButton}>
          <Image source={icons.leftArrow} style={styles.backIcon} />
        </TouchableOpacity>

        <View>
          <View style={styles.labels}>
            <Text style={styles.title}>Введіть ваш</Text>
            <Text style={styles.title}>Новий пароль</Text>
            <Text style={styles.subTitle}>Заповніть поля нижче</Text>
          </View>

          <View>
            <Input
              label={'Пароль:'}
              isShowLabel={true}
              placeholder="Придумайте новий пароль"
              value={password}
              onChangeText={e => setPassword(e)}
            />

            <View style={styles.someSpace}></View>

            <Input
              label={'Повторіть пароль:'}
              isShowLabel={true}
              placeholder="Введіть його знову"
              value={confirmPassword}
              onChangeText={e => setConfirmPassword(e)}
            />

            <TouchableOpacity
              onPress={() => {
                alert(' Ваш пароль успішно змінено!');
                navigation.navigate('LoginScreen');
              }}
              activeOpacity={0.7}
              style={styles.sendCode}>
              <Text style={styles.sendCodeText}>Змінити пароль</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createProfile}>
              <Text style={styles.createProfileText}>
                Маєте запитання?{' '}
                <Text style={styles.textBlack}>Напишіть нам!</Text>
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
  someSpace: {
    marginBottom: w * 0.07,
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
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    borderColor: '#27272f',
    justifyContent: 'center',
    backgroundColor: '#fae1dd',
    alignItems: 'center',
    marginTop: w * 0.1,
  },
  sendCodeText: {
    color: '#27272f',
    fontWeight: '500',
    fontSize: w * 0.05,
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

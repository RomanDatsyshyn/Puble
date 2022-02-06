import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {icons} from '../../assets/icons';

import Input from '../../components/Input';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default RegistrationScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.backgroundSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <View>
            <View style={styles.labels}>
              <Text style={styles.title}>Стань частиною</Text>
              <Text style={styles.title}>Puble</Text>
              <Text style={styles.subTitle}>Заповни всі поля нижче</Text>
            </View>

            <View>
              <Input
                label={'Як вас звати?'}
                isShowLabel={true}
                placeholder="Введіть своє ім'я"
                value={login}
                onChangeText={e => setLogin(e)}
              />

              <View style={styles.someSpace}></View>

              <Input
                label={'Ваш номер телефону:'}
                isShowLabel={true}
                placeholder="067 777 77 77"
                value={password}
                onChangeText={e => setPassword(e)}
              />

              <View style={styles.someSpace}></View>

              <Input
                label={'Ваш Email:'}
                isShowLabel={true}
                placeholder="Example@example.com"
                value={password}
                onChangeText={e => setPassword(e)}
              />

              <View style={styles.someSpace}></View>

              <Input
                label={'Пароль:'}
                isShowLabel={true}
                placeholder="Введіть ваш пароль"
                value={password}
                onChange={e => setPassword(e)}
              />

              <View style={styles.someSpace}></View>

              <Input
                label={'Повторіть пароль:'}
                isShowLabel={true}
                placeholder="Введіть його знову"
                value={password}
                onChange={e => setPassword(e)}
              />

              <TouchableOpacity
                // onPress={() => navigation.navigate('CodeRecoveryScreen')}
                activeOpacity={0.7}
                style={styles.sendCode}>
                <Text style={styles.sendCodeText}>Зареєструватися</Text>
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
        <TouchableOpacity
          onPress={() => navigation.navigate('WelcomeScreen')}
          style={styles.backButton}>
          <Image source={icons.leftArrow} style={styles.backIcon} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundSafeArea: {
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labels: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: w * 0.13,
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
  forgetPassword: {
    alignItems: 'flex-end',
    marginTop: w * 0.03,
    marginRight: w * 0.02,
  },
  forgetPasswordText: {
    color: '#609ed1',
    fontSize: w * 0.037,
  },
  createProfile: {
    alignSelf: 'center',
    marginTop: w * 0.1,
  },
  createProfileText: {
    color: '#a3a3ab',
    fontSize: w * 0.037,
    fontStyle: 'italic',
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
  sendCode: {
    width: w * 0.8,
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    backgroundColor: '#fae1dd',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: w * 0.1,
  },
  sendCodeText: {
    color: '#27272f',
    fontWeight: '400',
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

import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {icons} from '../../assets/icons';
import {colors} from '../../assets/colors';

import Input from '../../components/Input';
import Button from '../../components/Button';
import TextBlock from '../../components/TextBlock';
import BottomLinks from '../../components/BottomLinks';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export const RegistrationScreen = ({navigation}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.backgroundSafeArea}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.background}>
          <View>
            <View style={styles.labels}>
              <TextBlock text={'Стань частиною'} size={1} lightBlue boldest />
              <TextBlock text={'Puble'} size={1} lightBlue boldest />

              <View style={styles.subTitle}>
                <TextBlock text={'Заповни всі поля нижче'} size={5} grey bold />
              </View>
            </View>

            <View>
              <Input
                label={'Як вас звати?'}
                isShowLabel={true}
                placeholder="Введіть своє ім'я"
                value={login}
                onChangeText={e => setLogin(e)}
              />

              <View style={styles.someSpace} />

              <Input
                label={'Ваш номер телефону:'}
                isShowLabel={true}
                placeholder="067 777 77 77"
                value={password}
                onChangeText={e => setPassword(e)}
              />

              <View style={styles.someSpace} />

              <Input
                label={'Ваш Email:'}
                isShowLabel={true}
                placeholder="Example@example.com"
                value={password}
                onChangeText={e => setPassword(e)}
              />

              <View style={styles.someSpace} />

              <Input
                label={'Пароль:'}
                isShowLabel={true}
                placeholder="Введіть ваш пароль"
                value={password}
                onChange={e => setPassword(e)}
              />

              <View style={styles.someSpace} />

              <Input
                label={'Повторіть пароль:'}
                isShowLabel={true}
                placeholder="Введіть його знову"
                value={password}
                onChange={e => setPassword(e)}
              />

              <View style={styles.spacing} />

              <Button
                label={'Зареєструватися'}
                route={'TabNavigation'}
                navigation={navigation}
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

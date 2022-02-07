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
import Button from '../../../../components/Button';

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
            <TextBlock text={'Введіть ваш'} size={1} lightBlue boldest />
            <TextBlock text={'Новий пароль'} size={1} lightBlue boldest />

            <View style={styles.subTitle}>
              <TextBlock text={'Заповніть поля нижче'} size={5} grey bold />
            </View>
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

            <View style={styles.spacing}></View>

            <Button
              label={'Змінити пароль'}
              route={'LoginScreen'}
              navigation={navigation}
              pink
              bold
            />

            <View style={styles.spacing}></View>

            <BottomLinks
              firstText={'Маєте запитання?'}
              secondText={'Напишіть нам!'}
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
  subTitle: {
    marginTop: w * 0.02,
    marginBottom: w * 0.15,
  },
  someSpace: {
    marginBottom: w * 0.07,
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
  spacing: {
    marginTop: w * 0.1,
  },
});

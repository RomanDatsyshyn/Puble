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

export default ForgetPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <>
      <View style={styles.background}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={styles.backButton}>
          <Image source={icons.leftArrow} style={styles.backIcon} />
        </TouchableOpacity>

        <View>
          <View style={styles.labels}>
            <Text style={styles.title}>Введіть ваш</Text>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.subTitle}>Заповніть полe нижче</Text>
          </View>

          <View>
            <Text style={styles.inputLabel}>Email:</Text>

            <TextInput
              returnKeyType={'done'}
              placeholder="Example@example.com"
              placeholderTextColor={'#fff'}
              style={styles.input}
              value={email}
              onChangeText={e => setEmail(e)}
            />

            <View style={styles.someSpace}></View>

            <TouchableOpacity
              onPress={() => navigation.navigate('CodeRecoveryScreen')}
              activeOpacity={0.7}
              style={styles.sendCode}>
              <Text style={styles.sendCodeText}>Далі</Text>
              <Image source={icons.toRight} style={styles.toRightIcon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.haveAnyQuestion}>
              <Text style={styles.haveAnyQuestionText}>
                Маєте запитання? Напишіть нам!
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
    color: '#fff',
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    backgroundColor: '#27272f',
  },
  someSpace: {
    marginBottom: w * 0.07,
  },
  haveAnyQuestion: {
    alignSelf: 'center',
    marginTop: w * 0.2,
  },
  haveAnyQuestionText: {
    color: '#609ed1',
    fontSize: w * 0.037,
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
    width: w * 0.3,
    flexDirection: 'row',
    fontSize: w * 0.045,
    padding: 5,
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
    borderWidth: 1,
    borderColor: '#27272f',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginTop: w * 0.05,
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
});

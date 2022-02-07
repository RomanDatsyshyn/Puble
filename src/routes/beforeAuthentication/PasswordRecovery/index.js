import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {icons} from '../../../assets/icons';
import {colors} from '../../../assets/colors';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import TextBlock from '../../../components/TextBlock';
import BottomLinks from '../../../components/BottomLinks';

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
            <TextBlock text={'Введіть ваш'} size={1} lightBlue boldest />
            <TextBlock text={'Email'} size={1} lightBlue boldest />

            <View style={styles.subTitle}>
              <TextBlock text={'Заповніть полe нижче'} size={5} grey bold />
            </View>
          </View>

          <View>
            <Input
              label={'Email:'}
              isShowLabel={true}
              placeholder="Example@example.com"
              value={email}
              onChangeText={e => setEmail(e)}
            />

            <View style={styles.someSpace}></View>

            <Button
              label={'Далі'}
              route={'CodeRecoveryScreen'}
              navigation={navigation}
              pink
              bold
              rightArrow
            />

            <View style={styles.moreSpace}></View>

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
    backgroundColor: colors.white,
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
  moreSpace: {
    marginBottom: w * 0.2,
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

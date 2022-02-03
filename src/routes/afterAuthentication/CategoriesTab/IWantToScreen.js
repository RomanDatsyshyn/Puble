import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const w = Dimensions.get('window').width;

import {icons} from '../../../assets/icons';

export default IWantToScreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
        activeOpacity={0.7}
        style={styles.sendCode}>
        <Text style={styles.sendCodeText}>Я хочу манік</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.signInButton}
        onPress={() => navigation.navigate('CategoriesTabScreen')}>
        <Image source={icons.toLeft} style={styles.toRightIcon} />
        <Text style={styles.signInText}>Повернутися назад</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendCode: {
    width: w * 0.8,
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    borderRadius: w * 0.02,
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
  signInButton: {
    flexDirection: 'row',
    borderColor: '#27272f',
    borderWidth: 1,
    width: w * 0.8,
    paddingLeft: w * 0.05,
    paddingRight: w * 0.05,
    paddingTop: w * 0.04,
    paddingBottom: w * 0.04,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: w * 0.03,
    marginTop: w * 0.03,
  },
  signInText: {
    fontSize: w * 0.045,
    color: '#27272f',
    marginLeft: w * 0.01,
  },
  toRightIcon: {
    width: w * 0.05,
    height: w * 0.05,
  },
});

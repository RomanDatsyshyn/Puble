import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const w = Dimensions.get('window').width;

export default IWantToScreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Feed')}
        activeOpacity={0.7}
        style={styles.sendCode}>
        <Text style={styles.sendCodeText}>Я хочу манік</Text>
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
});

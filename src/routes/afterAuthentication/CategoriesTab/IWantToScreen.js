import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default IWantToScreen = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Text>IWantToScreen</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('CategoriesTabScreen')}>
        <Text>CategoriesTab</Text>
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
});

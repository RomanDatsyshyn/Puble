import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

// import {icons} from '../../assets/icons';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default CategoriesTab = ({navigation}) => {
  return (
    <View style={styles.background}>
      <Text>CategoriesTAB!</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('IWantToScreen')}>
        <Text>IWantToScreen</Text>
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

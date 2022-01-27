import React from 'react';
import {View, Text, Button, StyleSheet, Dimensions, Image} from 'react-native';

import {images} from '../assets/images';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default WelcomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.background}>
        <Image source={images.welcomeBoy} style={styles.image} />
        <View style={styles.labels}>
          <Text style={styles.title}>Забудь про пошук.</Text>
          <Text style={styles.subTitle}>Тепер є Ми!</Text>
        </View>
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('DetailsScreen')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#cddafd',
    justifyContent: 'flex-end',
  },
  labels: {
    position: 'absolute',
    top: h * 0.1,
    left: w * 0.2,
  },
  title: {
    fontSize: w * 0.07,
  },
  subTitle: {
    fontSize: w * 0.06,
  },
  image: {
    width: w * 0.32,
    height: h * 0.35,
    alignSelf: 'flex-end',
    marginRight: w * 0.1,
    marginBottom: w * 0.1,
  },
  container: {
    height: h * 0.45,
    backgroundColor: '#fff',
    borderTopLeftRadius: w * 0.08,
    borderTopRightRadius: w * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

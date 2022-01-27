import React from 'react';
import {View, Text, Button} from 'react-native';

export default DetailsScreen = ({navigation}) => {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('DetailsScreen')}
        />

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('WelcomeScreen')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </>
  );
};

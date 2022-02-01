import * as React from 'react';
// import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigations/rootNavigation';

export default App = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle={false ? 'light-content' : 'dark-content'} /> */}
      <RootNavigation />
    </NavigationContainer>
  );
};

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './src/navigations';

export default App = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DirectTabScreen from '../../routes/afterAuthentication/DirectTab';

const Stack = createNativeStackNavigator();

export default function DirectTabNavigation() {
  return (
    <Stack.Navigator initialRouteName="DirectTabScreen">
      <Stack.Screen
        name="DirectTabScreen"
        component={DirectTabScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

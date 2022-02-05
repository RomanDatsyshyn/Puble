import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DirectTabScreen from '../../routes/afterAuthentication/DirectTab';
import DialogScreen from '../../routes/afterAuthentication/DirectTab/DialogScreen';

const Stack = createNativeStackNavigator();

export default function DirectTabNavigation() {
  return (
    <Stack.Navigator initialRouteName="DirectTabScreen">
      <Stack.Screen
        name="DirectTabScreen"
        component={DirectTabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DialogScreen"
        component={DialogScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DirectTabScreen from '../../routes/afterAuthentication/DirectTab';
import DialogScreen from '../../routes/afterAuthentication/DirectTab/DialogScreen';
import DirectScreen from '../../routes/afterAuthentication/DirectTab/DirectScreen';
import EmptyDirectScreen from '../../routes/afterAuthentication/DirectTab/EmptyDirectScreen';

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
        name="DirectScreen"
        component={DirectScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmptyDirectScreen"
        component={EmptyDirectScreen}
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

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DirectTabScreen from '../../routes/afterAuthentication/DirectTab';
import DialogScreen from '../../routes/afterAuthentication/DirectTab/DialogScreen';
import Dialog from '../../routes/afterAuthentication/DirectTab/Dialog';
import EmptyDialogScreen from '../../routes/afterAuthentication/DirectTab/EmptyDialogScreen';

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
        component={DialogScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EmptyDirectScreen"
        component={EmptyDialogScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dialog"
        component={Dialog}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

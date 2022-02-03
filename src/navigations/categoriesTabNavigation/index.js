import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CategoriesTabScreen from '../../routes/afterAuthentication/CategoriesTab';
import IWantToScreen from '../../routes/afterAuthentication/CategoriesTab/IWantToScreen';

const Stack = createNativeStackNavigator();

export default function CategoriesTabNavigation() {
  return (
    <Stack.Navigator initialRouteName="CategoriesTabScreen">
      <Stack.Screen
        name="CategoriesTabScreen"
        component={CategoriesTabScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IWantToScreen"
        component={IWantToScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

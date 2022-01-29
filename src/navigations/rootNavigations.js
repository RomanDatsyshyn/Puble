import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../routes/WelcomeScreen';
import DetailsScreen from '../routes/DetailsScreen';
import LoginScreen from '../routes/beforeAuth/LoginScreen';
import ForgetPasswordScreen from '../routes/beforeAuth/ForgetPasswordScreen';
import CodeRecoveryScreen from '../routes/beforeAuth/CodeRecoveryScreen';
import NewPasswordScreen from '../routes/beforeAuth/NewPasswordScreen';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="WelcomeScreen">
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CodeRecoveryScreen"
        component={CodeRecoveryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

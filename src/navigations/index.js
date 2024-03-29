import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomeScreen from '../routes/beforeAuthentication/WelcomeScreen';
import LoginScreen from '../routes/beforeAuthentication/LoginScreen';
import ForgetPasswordScreen from '../routes/beforeAuthentication/PasswordRecovery';
import CodeRecoveryScreen from '../routes/beforeAuthentication/PasswordRecovery/CodeRecoveryScreen';
import NewPasswordScreen from '../routes/beforeAuthentication/PasswordRecovery/NewPasswordScreen';
import RegistrationScreen from '../routes/beforeAuthentication/RegistrationScreen';

import IsUserLoggedScreen from '../routes/IsUserLoggedScreen';
import TabNavigation from './bottomTabsNavigation';
import Dialog from '../routes/afterAuthentication/DirectTab/Dialog';

const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="IsUserLoggedScreen">
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dialog"
        component={Dialog}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IsUserLoggedScreen"
        component={IsUserLoggedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
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
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

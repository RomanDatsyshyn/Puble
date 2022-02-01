import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedTabScreen from '../../routes/afterAuthentication/FeedTab';
import CategoriesTabScreen from '../../routes/afterAuthentication/CategoriesTab';
import DirectTabScreen from '../../routes/afterAuthentication/DirectTab';
import ProfileTabScreen from '../../routes/afterAuthentication/ProfileTab';

import {
  feedTabOptions,
  categoriesTabOptions,
  directTabOptions,
  profileTabOptions,
} from './tabsOptions';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen
        name="Feed"
        component={FeedTabScreen}
        options={feedTabOptions}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesTabScreen}
        options={categoriesTabOptions}
      />
      <Tab.Screen
        name="Direct"
        component={DirectTabScreen}
        options={directTabOptions}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTabScreen}
        options={profileTabOptions}
      />
    </Tab.Navigator>
  );
}

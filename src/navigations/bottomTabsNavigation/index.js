import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedTabScreen from '../../routes/afterAuthentication/FeedTab/FeedTabScreen';
import CategoriesTabScreen from '../../routes/afterAuthentication/CategoriesTab/CategoriesTabScreen';
import DirectTabScreen from '../../routes/afterAuthentication/DirectTab/DirectTabScreen';
import ProfileTabScreen from '../../routes/afterAuthentication/ProfileTab/ProfileTabScreen';

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

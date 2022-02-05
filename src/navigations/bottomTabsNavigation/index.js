import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedTabScreen from '../../routes/afterAuthentication/FeedTab';
import ProfileTabScreen from '../../routes/afterAuthentication/ProfileTab';

import CategoriesTabNavigation from '../categoriesTabNavigation';
import DirectTabNavigation from '../directTabNavigation';

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
        component={CategoriesTabNavigation}
        options={categoriesTabOptions}
      />
      <Tab.Screen
        name="Direct"
        component={DirectTabNavigation}
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

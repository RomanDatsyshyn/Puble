import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedTabScreen from '../../routes/afterAuthentication/FeedTab';
import SpecialistsTabScreen from '../../routes/afterAuthentication/SpecialistsTab';
import ProfileTabScreen from '../../routes/afterAuthentication/ProfileTab';
import CategoriesTabNavigation from '../categoriesTabNavigation';

import {
  feedTabOptions,
  categoriesTabOptions,
  profileTabOptions,
  specialistsTabOptions,
} from './tabsOptions';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Categories">
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
        name="Specialists"
        component={SpecialistsTabScreen}
        options={specialistsTabOptions}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTabScreen}
        options={profileTabOptions}
      />
    </Tab.Navigator>
  );
}

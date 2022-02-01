import * as React from 'react';
import {Image, Dimensions} from 'react-native';

import {icons} from '../../../assets/icons';

const w = Dimensions.get('window').width;

export const feedTabOptions = {
  tabBarIcon: ({focused}) =>
    focused ? (
      <Image source={icons.homeActive} style={{width: 30, height: 30}} />
    ) : (
      <Image source={icons.home} style={{width: 30, height: 30}} />
    ),
  headerTitle: 'Пропозиції',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
  tabBarBadge: '25',
  tabBarBadgeStyle: {
    backgroundColor: '#fae1dd',
  },
};

export const categoriesTabOptions = {
  tabBarIcon: ({focused}) =>
    focused ? (
      <Image source={icons.categoriesActive} style={{width: 30, height: 30}} />
    ) : (
      <Image source={icons.categories} style={{width: 30, height: 30}} />
    ),
  headerTitle: 'Категорії',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
};

export const directTabOptions = {
  tabBarIcon: ({focused}) =>
    focused ? (
      <Image source={icons.directActive} style={{width: 30, height: 30}} />
    ) : (
      <Image source={icons.direct} style={{width: 30, height: 30}} />
    ),
  headerTitle: 'Особисті повідомлення',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
  tabBarBadge: '3',
  tabBarBadgeStyle: {
    backgroundColor: '#fae1dd',
  },
};

export const profileTabOptions = {
  tabBarIcon: ({focused}) =>
    focused ? (
      <Image source={icons.profileActive} style={{width: 30, height: 30}} />
    ) : (
      <Image source={icons.profile} style={{width: 30, height: 30}} />
    ),
  headerTitle: 'Профіль',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
};

/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image, Dimensions} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import {icons} from '../../../assets/icons';
import {colors} from '../../../assets/colors';

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

export const specialistsTabOptions = {
  tabBarIcon: ({focused}) => (
    <FontAwesomeIcon
      icon={Icons.faUserGroup}
      size={w * 0.1}
      style={{color: focused ? colors.deepBlue : colors.lightGrey}}
    />
  ),
  headerTitle: 'Спеціалісти',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
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

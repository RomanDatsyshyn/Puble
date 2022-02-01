import * as React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {icons} from '../assets/icons';

const w = Dimensions.get('window').width;

const FeedTab = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>FeedTab!</Text>
    </View>
  );
};

const CategoriesTAB = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CategoriesTAB!</Text>
    </View>
  );
};

const DirectTAB = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DirectTAB!</Text>
    </View>
  );
};

const ProfileTAB = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileTAB!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const feedTabOptions = {
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

const categoriesTabOptions = {
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

const directTabOptions = {
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

const profileTabOptions = {
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

export default function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={FeedTab} options={feedTabOptions} />
      <Tab.Screen
        name="Categories"
        component={CategoriesTAB}
        options={categoriesTabOptions}
      />
      <Tab.Screen
        name="Direct"
        component={DirectTAB}
        options={directTabOptions}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTAB}
        options={profileTabOptions}
      />
    </Tab.Navigator>
  );
}

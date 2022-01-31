import * as React from 'react';
import {Text, View, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {icons} from '../assets/icons';

const w = Dimensions.get('window').width;

function FeedTab() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>FeedTab!</Text>
    </View>
  );
}

function CategoriesTAB() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CategoriesTAB!</Text>
    </View>
  );
}

function DirectTAB() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>DirectTAB!</Text>
    </View>
  );
}

function ProfileTAB() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileTAB!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const feedTabOptions = {
  tabBarIcon: () => (
    <Image source={icons.home} style={{width: 30, height: 30}} />
  ),
  headerTitle: 'Пропозиції',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
  tabBarBadge: '1',
  tabBarBadgeStyle: {backgroundColor: '#fae1dd'},
};

const categoriesTabOptions = {
  tabBarIcon: () => (
    <Image source={icons.categories} style={{width: 26, height: 26}} />
  ),
  headerTitle: 'Категорії',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
};

const directTabOptions = {
  tabBarIcon: () => (
    <Image source={icons.direct} style={{width: 30, height: 30}} />
  ),
  headerTitle: 'Особисті повідомлення',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
  tabBarBadge: '22',
  tabBarBadgeStyle: {backgroundColor: '#fae1dd'},
};
const profileTabOptions = {
  tabBarIcon: () => (
    <Image source={icons.profile} style={{width: 30, height: 30}} />
  ),
  headerTitle: 'Профіль',
  tabBarShowLabel: false,
  tabBarIconStyle: {
    marginTop: w * 0.05,
  },
};

export default function TabNavigation({navigation}) {
  return (
    <Tab.Navigator>
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

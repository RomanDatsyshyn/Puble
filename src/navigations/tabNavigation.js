import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedTab} />
      <Tab.Screen name="Categories" component={CategoriesTAB} />
      <Tab.Screen name="Direct" component={DirectTAB} />
      <Tab.Screen name="Profile" component={ProfileTAB} />
    </Tab.Navigator>
  );
}

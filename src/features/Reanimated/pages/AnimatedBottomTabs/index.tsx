import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const DummyPage = () => {
  return null;
};

const Tabs = createBottomTabNavigator();

const AnimatedBottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={DummyPage} />
      <Tabs.Screen name="Cart" component={DummyPage} />
      <Tabs.Screen name="Settings" component={DummyPage} />
      <Tabs.Screen name="Account" component={DummyPage} />
    </Tabs.Navigator>
  );
};

export default AnimatedBottomTabs;

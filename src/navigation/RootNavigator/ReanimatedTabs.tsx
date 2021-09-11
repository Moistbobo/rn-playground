import React from 'react';
import PanningScrollWithReactiveBackground from 'features/Reanimated/PanningScrollWithReactiveBackground';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tabs = createMaterialTopTabNavigator();

const ReanimatedTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="ReactiveScrollview"
        component={PanningScrollWithReactiveBackground}
      />
    </Tabs.Navigator>
  );
};

export default ReanimatedTabs;

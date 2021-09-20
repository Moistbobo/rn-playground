import React from 'react';
import PanningScrollWithReactiveBackground from 'features/Reanimated/pages/PanningScrollWithReactiveBackground';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ActivityIndicator, View} from 'react-native';

const Tabs = createMaterialTopTabNavigator();

const ReanimatedTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        lazy: true,
        lazyPlaceholder: () => (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          >
            <ActivityIndicator size={24} color="blue" />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="ReactiveScrollview"
        component={PanningScrollWithReactiveBackground}
      />
    </Tabs.Navigator>
  );
};

export default ReanimatedTabs;

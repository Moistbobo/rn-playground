import React from 'react';
import PanningScrollWithReactiveBackground from 'features/Reanimated/pages/PanningScrollWithReactiveBackground';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ActivityIndicator, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SpotifyLikePage from 'features/Reanimated/pages/SpotifyLikePage';

const Tabs = createMaterialTopTabNavigator();

const ReanimatedTabs = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}} edges={['top']}>
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

        <Tabs.Screen name="SpotifyLikePage" component={SpotifyLikePage} />
      </Tabs.Navigator>
    </SafeAreaView>
  );
};

export default ReanimatedTabs;

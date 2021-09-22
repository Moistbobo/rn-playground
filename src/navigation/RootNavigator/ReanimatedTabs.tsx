import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import PanningScrollWithReactiveBackground from 'features/Reanimated/pages/PanningScrollWithReactiveBackground';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SpotifyLikePage from 'features/Reanimated/pages/SpotifyLikePage';

const Tabs = createMaterialTopTabNavigator();

const ReanimatedTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        lazy: true,
        lazyPlaceholder: () => (
          <View style={styles.placeholderContainer}>
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
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ReanimatedTabs;

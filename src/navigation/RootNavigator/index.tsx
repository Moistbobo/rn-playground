import React from 'react';
import Landing from 'features/Landing';
import MobileStoreStack from 'navigation/RootNavigator/MobileStoreStack';
import ReanimatedTabs from 'navigation/RootNavigator/ReanimatedTabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

export type RootNavigatorParamList = {
  Landing: undefined;
  MobileStore: undefined;
  Reanimated: undefined;
};

const Drawer = createDrawerNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Landing" component={Landing} />
      <Drawer.Screen name="MobileStore" component={MobileStoreStack} />
      <Drawer.Screen name="Reanimated" component={ReanimatedTabs} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;

import React from 'react';
import Landing from 'features/Landing';
import MobileStoreStack from 'navigation/RootNavigator/MobileStoreStack';
import {createStackNavigator} from '@react-navigation/stack';
import ReanimatedTabs from 'navigation/RootNavigator/ReanimatedTabs';

export type RootNavigatorParamList = {
  Landing: undefined;
  MobileStore: undefined;
  Reanimated: undefined;
};

const Stack = createStackNavigator<RootNavigatorParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="MobileStore" component={MobileStoreStack} />
      <Stack.Screen name="Reanimated" component={ReanimatedTabs} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

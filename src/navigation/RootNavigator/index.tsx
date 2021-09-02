import React from 'react';
import Landing from 'features/Landing';
import MobileStoreStack from 'navigation/RootNavigator/MobileStoreStack';
import {createStackNavigator} from '@react-navigation/stack';

export type RootNavigatorPages = {
  Landing: undefined;
  MobileStore: undefined;
};

const Stack = createStackNavigator<RootNavigatorPages>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="MobileStore" component={MobileStoreStack} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

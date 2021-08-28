import React from 'react';
import Landing from 'features/Landing';
import MobileStoreStack from 'navigation/RootNavigator/MobileStoreStack';
import {createStackNavigator} from '@react-navigation/stack';

export type RootNavigatorPages = {
  Landing: undefined;
  MobileStoreStack: undefined;
};

const Stack = createStackNavigator<RootNavigatorPages>();

const Index = () => {
  return (
    <Stack.Navigator
      initialRouteName="MobileStore"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="MobileStore" component={MobileStoreStack} />
    </Stack.Navigator>
  );
};

export default Index;

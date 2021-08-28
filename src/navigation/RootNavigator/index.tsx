import React from 'react';
import Landing from 'features/Landing';
import MobileStore from 'navigation/RootNavigator/MobileStore';
import {createStackNavigator} from '@react-navigation/stack';

export type RootNavigatorPages = {
  Landing: undefined;
  MobileStore: undefined;
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
      <Stack.Screen name="MobileStore" component={MobileStore} />
    </Stack.Navigator>
  );
};

export default Index;

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from 'features/Landing';
import MobileStore from 'navigation/RootNavigator/MobileStore';

export type RootNavigatorPages = {
  Landing: undefined;
  MobileStore: undefined;
};

const Stack = createNativeStackNavigator<RootNavigatorPages>();

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

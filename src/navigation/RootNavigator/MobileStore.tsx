import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payment from 'features/MobileStore/pages/Payment';

export type MobileStorePages = {
  Payment: undefined;
};

const Stack = createNativeStackNavigator<MobileStorePages>();

const MobileStore = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default MobileStore;

import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import Payment from 'features/MobileStore/pages/Payment';
import AppConfig, {AppConfigEnum} from 'config/AppConfig';
import ProductListing from 'features/MobileStore/pages/ProductListing';
import {createStackNavigator} from '@react-navigation/stack';

export type MobileStorePages = {
  Payment: undefined;
  ProductListing: undefined;
};

const Stack = createStackNavigator<MobileStorePages>();

const MobileStore = () => {
  return (
    <StripeProvider publishableKey={AppConfig.get(AppConfigEnum.stripePK)}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ProductListing" component={ProductListing} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </StripeProvider>
  );
};

export default MobileStore;

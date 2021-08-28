import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import Payment from 'features/MobileStore/pages/Payment';
import AppConfig, {AppConfigEnum} from 'config/AppConfig';
import ItemListing from 'features/MobileStore/pages/ItemListing';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ItemDetail, {
  ItemDetailParams,
} from 'features/MobileStore/pages/ItemDetail';
import {CardStyleInterpolators} from '@react-navigation/stack';

export type MobileStorePages = {
  Payment: undefined;
  ItemListing: undefined;
  ItemDetail: ItemDetailParams;
};

const Stack = createSharedElementStackNavigator<MobileStorePages>();

const MobileStoreStack = () => {
  return (
    <StripeProvider publishableKey={AppConfig.get(AppConfigEnum.stripePK)}>
      <Stack.Navigator
        initialRouteName="ItemListing"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="ItemListing" component={ItemListing} />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          sharedElements={route => {
            return [route.params.itemId, `${route.params.itemId}-name`];
          }}
        />
      </Stack.Navigator>
    </StripeProvider>
  );
};

export default MobileStoreStack;

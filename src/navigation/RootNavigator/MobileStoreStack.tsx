import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import Payment from 'features/MobileStore/pages/Payment';
import AppConfig, {AppConfigEnum} from 'config/AppConfig';
import ItemListing from 'features/MobileStore/pages/ItemListing';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ItemDetail, {
  ItemDetailParams,
} from 'features/MobileStore/pages/ItemDetail';
import PaymentSummary from 'features/MobileStore/pages/PaymentSummary';
import ShoppingCartButton from 'features/MobileStore/components/ShoppingCartButton';
import {useSelector} from 'react-redux';
import {selectCartCount} from 'features/MobileStore/slice/selectors';
import {showMessage} from 'react-native-flash-message';
import {CardStyleInterpolators} from '@react-navigation/stack';
import Cart from '../../features/MobileStore/pages/Cart';
import BackButton from '../../components/BackButton';
import Design from '../../features/MobileStore/config/Design';

export type MobileStorePages = {
  Payment: undefined;
  ItemListing: undefined;
  ItemDetail: ItemDetailParams;
  Cart: undefined;
  PaymentSummary: undefined;
};

const Stack = createSharedElementStackNavigator<MobileStorePages>();

const MobileStoreStack = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <StripeProvider publishableKey={AppConfig.get(AppConfigEnum.stripePK)}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="ItemListing"
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Payment"
          component={Payment}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerShown: true,
            headerTitle: 'Item Listing',
            headerLeft: () => undefined,
            headerRight: () => (
              <ShoppingCartButton
                numCartItems={cartCount}
                onPress={() => {
                  if (cartCount === 0) {
                    showMessage({
                      message: 'You have no items in cart.',
                      type: 'warning',
                    });
                  } else {
                    navigation.navigate('Cart');
                  }
                }}
              />
            ),
            headerRightContainerStyle: {
              // offset shopping cart count
              paddingRight: 12,
            },
          })}
          name="ItemListing"
          component={ItemListing}
        />
        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={{
            headerShown: true,
            headerTitle: 'Item Detail',
            headerLeft: () => (
              <BackButton
                containerStyle={{paddingLeft: 8}}
                tintColor={Design.colors.reddishBrown}
              />
            ),
            cardStyleInterpolator:
              CardStyleInterpolators.forScaleFromCenterAndroid,
          }}
          sharedElements={route => {
            return [route.params.itemId, `${route.params.itemId}-name`];
          }}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerLeft: () => (
              <BackButton
                containerStyle={{paddingLeft: 8}}
                tintColor={Design.colors.reddishBrown}
              />
            ),
          }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="PaymentSummary"
          component={PaymentSummary}
        />
      </Stack.Navigator>
    </StripeProvider>
  );
};

export default MobileStoreStack;

import React from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemType} from 'types/MobileStoreTypes';
import CartItem from 'features/MobileStore/pages/Cart/components/CartItem';
import {
  selectCart,
  selectCartCount,
  selectItems,
} from 'features/MobileStore/slice/selectors';
import Design from 'features/MobileStore/config/Design';
import CartTotal from 'features/MobileStore/pages/Cart/components/CartTotal';
import MobileStoreService from 'services/MobileStoreService';
import {showMessage} from 'react-native-flash-message';
import {AppDispatch} from 'store/RootStore';
import {MobileStoreActions} from 'features/MobileStore/slice';
import TransparentButton from 'components/TransparentButton';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {
  initPaymentSheet,
  presentPaymentSheet,
} from '@stripe/stripe-react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MobileStoreParamList} from 'navigation/RootNavigator/MobileStoreStack';

const Cart = () => {
  const {navigate, replace} =
    useNavigation<StackNavigationProp<MobileStoreParamList, 'Cart'>>();
  const dispatch = useDispatch<AppDispatch>();
  const cart = useSelector(selectCart);
  const cartCount = useSelector(selectCartCount);
  const items = useSelector(selectItems);
  const focused = useIsFocused();

  const [totalPrice, setTotalPrice] = React.useState(0);

  const [paymentLoading, setPaymentLoading] = React.useState(false);

  const cartItemsWithQuantity = React.useMemo(() => {
    if (!cart) return [];
    return Object.keys(cart).map(id => ({
      _id: id,
      quantity: cart[id],
    }));
  }, [cart]);

  // go back to item listing page if there are no items in cart
  React.useEffect(() => {
    if (cartCount === 0 && focused) {
      navigate('ItemListing');
    }
  }, [cartCount]);

  React.useEffect(() => {
    if (!cart) return;

    MobileStoreService.calculatePrice(cartItemsWithQuantity)
      .then(response => {
        setTotalPrice(response.data.price);
      })
      .catch(() => {
        showMessage({
          message: 'Error retrieving final price. Please reload this page!',
          type: 'danger',
        });
      });
  }, [cart]);

  const onPressCheckout = async () => {
    setPaymentLoading(true);

    const response = await MobileStoreService.checkout(cartItemsWithQuantity);
    const {
      data: {paymentIntent, ephemeralKey, customer},
    } = response;

    const {error} = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
    });
    if (error) {
      showMessage({
        message: 'There was an issue contacting our servers. Please try again.',
        type: 'danger',
      });
      setPaymentLoading(false);
      return;
    }

    const {error: paymentError} = await presentPaymentSheet({
      clientSecret: paymentIntent,
    });

    if (paymentError) {
      showMessage({
        message: 'There was an issue with payment. Please try again.',
        type: 'danger',
      });
    } else {
      // communicate with BE when successful too
      replace('PaymentSummary');
    }
    setPaymentLoading(false);
  };

  const cartItems = React.useMemo(() => {
    if (!items) return;
    return Object.keys(cart).map(id => {
      const itemData = items.find(x => x._id === id);
      return {...itemData, quantity: cart[id]};
    });
  }, [cart, items]);

  const renderItem = ({item}: {item: ItemType & {quantity: number}}) => {
    const onConfirmEditCart = (_quantity: number) => {
      dispatch(
        MobileStoreActions.editCart({_id: item._id, quantity: _quantity}),
      );
    };

    const onDeleteCartItem = () => {
      dispatch(MobileStoreActions.removeItemFromCart({_id: item._id}));
    };

    return (
      <CartItem
        {...item}
        quantity={cart[item._id]}
        onConfirmEditCart={onConfirmEditCart}
        onDeleteCartItem={onDeleteCartItem}
      />
    );
  };

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      data={cartItems as any}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      ListFooterComponentStyle={styles.footerStyle}
      ListFooterComponent={() => (
        <>
          <CartTotal total={totalPrice} />
          <View style={styles.checkoutButtonContainer}>
            <TransparentButton
              label="Checkout"
              onPress={onPressCheckout}
              color={Design.colors.reddishBrown}
              loading={paymentLoading}
            />
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    backgroundColor: Design.colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    padding: 16,
  },
  footerStyle: {
    marginTop: 16,
    flex: 1,
  },
  checkoutButtonContainer: {
    width: '75%',
    alignSelf: 'center',
    marginTop: 32,
  },
});

export default Cart;

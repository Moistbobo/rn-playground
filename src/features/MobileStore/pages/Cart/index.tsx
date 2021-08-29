import React from 'react';

import {useSelector} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemType} from 'types/MobileStoreTypes';
import CartItem from 'features/MobileStore/pages/Cart/components/CartItem';
import {selectCart, selectItems} from 'features/MobileStore/slice/selectors';
import Design from 'features/MobileStore/config/Design';
import CartTotal from 'features/MobileStore/pages/Cart/components/CartTotal';
import MobileStoreService from 'services/MobileStoreService';
import FlashMessage, {showMessage} from 'react-native-flash-message';

const Cart = () => {
  const cart = useSelector(selectCart);
  const items = useSelector(selectItems);

  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    if (!cart) return;
    const formattedCart = Object.keys(cart).map(id => ({
      _id: id,
      quantity: cart[id],
    }));

    MobileStoreService.calculatePrice(formattedCart)
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

  const cartItems = React.useMemo(() => {
    if (!items) return;
    return Object.keys(cart).map(id => {
      const itemData = items.find(x => x._id === id);
      return {...itemData, quantity: cart[id]};
    });
  }, [cart, items]);

  const renderItem = ({item}: {item: ItemType & {quantity: number}}) => (
    <CartItem {...item} quantity={cart[item._id]} />
  );

  return (
    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.contentContainerStyle}
      data={cartItems as any}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      ListFooterComponentStyle={styles.footerStyle}
      ListFooterComponent={() => <CartTotal total={totalPrice} />}
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
  },
});

export default Cart;

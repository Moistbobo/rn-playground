import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemType} from 'types/MobileStoreTypes';
import ProductItem from 'features/MobileStore/pages/ItemListing/components/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from 'store/RootStore';
import {
  selectCartCount,
  selectItems,
} from 'features/MobileStore/slice/selectors';
import {getItems} from 'features/MobileStore/slice';
import {useNavigation} from '@react-navigation/native';
import Design from 'features/MobileStore/config/Design';
import ShoppingCartButton from 'features/MobileStore/components/ShoppingCartButton';
import {showMessage} from 'react-native-flash-message';

const ItemListing = () => {
  const {navigate} = useNavigation();
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(selectItems);

  const refreshProducts = () => {
    dispatch(getItems());
  };

  React.useEffect(() => {
    refreshProducts();
  }, []);

  const renderItem = ({item}: {item: ItemType}) => {
    const onPress = () => {
      navigate('ItemDetail', {itemId: item._id, name: item.name});
    };

    return <ProductItem {...item} onPress={onPress} />;
  };

  const onPressShoppingCart = () => {
    if (cartCount === 0) {
      showMessage({
        message: 'You have no items in cart.',
        type: 'warning',
      });
    } else {
      navigate('Cart');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.shoppingCartBtn}>
        <ShoppingCartButton
          numCartItems={cartCount}
          onPress={onPressShoppingCart}
        />
      </View>

      <FlatList
        data={items}
        horizontal
        renderItem={renderItem}
        refreshing={!items}
        onRefresh={refreshProducts}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={() => <View style={{width: 32}} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Design.colors.white,
    flex: 1,
  },
  shoppingCartBtn: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});

export default ItemListing;

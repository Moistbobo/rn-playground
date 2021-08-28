import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemType} from 'types/MobileStoreTypes';
import ProductItem from 'features/MobileStore/pages/ProductListing/components/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from 'store/RootStore';
import {selectItems} from 'features/MobileStore/slice/selectors';
import {getItems} from 'features/MobileStore/slice';

const ProductListing = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(selectItems);

  const refreshProducts = () => {
    console.log('test');
    dispatch(getItems());
  };

  React.useEffect(() => {
    refreshProducts();
  }, []);

  const renderItem = ({item}: {item: ItemType}) => {
    const onPress = () => {
      console.log(item);
    };

    return <ProductItem {...item} onPress={onPress} />;
  };

  return (
    <FlatList
      data={items}
      horizontal
      renderItem={renderItem}
      refreshing={!items}
      onRefresh={refreshProducts}
      contentContainerStyle={styles.contentContainerStyle}
      ItemSeparatorComponent={() => <View style={{width: 32}} />}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});

export default ProductListing;

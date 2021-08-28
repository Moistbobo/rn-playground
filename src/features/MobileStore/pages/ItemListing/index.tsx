import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemType} from 'types/MobileStoreTypes';
import ProductItem from 'features/MobileStore/pages/ItemListing/components/ProductItem';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from 'store/RootStore';
import {selectItems} from 'features/MobileStore/slice/selectors';
import {getItems} from 'features/MobileStore/slice';
import {useNavigation} from '@react-navigation/native';
import Design from 'features/MobileStore/config/Design';

const ItemListing = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation();
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

  return (
    <FlatList
      style={styles.flatlist}
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
  flatlist: {
    flex: 1,
    backgroundColor: Design.colors.white,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingHorizontal: 32,
  },
});

export default ItemListing;

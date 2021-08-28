import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ItemType} from 'types/MobileStoreTypes';
import ProductItem from 'features/MobileStore/pages/ProductListing/components/ProductItem';
import MobileStoreService from 'services/MobileStoreService';

const ProductListing = () => {
  const [items, setItems] = React.useState<ItemType[] | undefined>(undefined);

  const refreshProducts = async () => {
    setItems(undefined);

    const response = await MobileStoreService.getItems();

    setItems(response.data.items);
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

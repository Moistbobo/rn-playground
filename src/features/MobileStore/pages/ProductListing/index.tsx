import React from 'react';
import {FlatList} from 'react-native';
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
      renderItem={renderItem}
      refreshing={!items}
      onRefresh={refreshProducts}
    />
  );
};

export default ProductListing;

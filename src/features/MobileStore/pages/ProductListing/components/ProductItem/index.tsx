import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

export type Props = {
  name: string;
  img: string;
  price: number;
  description: string;
  onPress: () => void;
};

const ProductItem = ({name, onPress, img, price, description}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: img}} style={styles.image} />
      <View>
        <Text>${price}</Text>
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: 'gray',
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default ProductItem;

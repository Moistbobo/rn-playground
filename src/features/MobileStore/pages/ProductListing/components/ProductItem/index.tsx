import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

export type Props = {
  name: string;
  img: string;
  price: number;
  description: string;
  onPress: () => void;
};

const ProductItem = ({name, onPress, img}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.productItem}>
      <Image source={{uri: img}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 32,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  name: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductItem;

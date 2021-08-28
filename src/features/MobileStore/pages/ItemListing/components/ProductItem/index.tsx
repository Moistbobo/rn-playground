import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Design from 'features/MobileStore/config/Design';

export type Props = {
  _id: string;
  name: string;
  img: string;
  price: number;
  description: string;
  onPress: () => void;
};

const ProductItem = ({_id, name, onPress, img}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.productItem}>
      <SharedElement id={_id}>
        <Image source={{uri: img}} style={styles.image} />
      </SharedElement>
      <SharedElement id={`${_id}-name`}>
        <Text style={styles.name}>{name}</Text>
      </SharedElement>
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
    borderWidth: 1,
    borderColor: Design.colors.paleOrange,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  name: {
    color: Design.colors.reddishBrown,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductItem;

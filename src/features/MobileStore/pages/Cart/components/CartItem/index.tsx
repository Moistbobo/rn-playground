import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Design from 'features/MobileStore/config/Design';

type Props = {
  /**
   * Image url
   */
  img: string;

  /**
   * Name of the item.
   */
  name: string;

  /**
   * Quantity of the item.
   */
  quantity: number;

  /**
   * Base price for 1 item.
   */
  price: number;
};

const CartItem = ({img, name, quantity, price}: Props) => {
  return (
    <View style={styles.cartItem}>
      <Text style={styles.quantity}>{quantity}</Text>

      <View style={styles.content}>
        <Image style={styles.image} source={{uri: img}} />

        <Text>{name}</Text>

        <Text>${price * quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: Design.colors.paleBrown,
  },
  quantity: {
    flex: 0.1,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
});

export default CartItem;

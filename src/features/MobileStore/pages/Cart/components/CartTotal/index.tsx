import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Design from 'features/MobileStore/config/Design';

type Props = {
  // Calculated total price
  total: number;
};

/**
 * Component that shows the total price.
 * Automatically converts the price in cents to dollars.
 */
const CartTotal = ({total}: Props) => {
  return (
    <View style={styles.cartTotal}>
      {total === 0 ? (
        <ActivityIndicator color={Design.colors.reddishBrown} />
      ) : (
        <Text>Total: ${total / 100}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartTotal: {
    borderTopColor: Design.colors.reddishBrown,
    paddingTop: 16,
    borderTopWidth: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});

export default CartTotal;

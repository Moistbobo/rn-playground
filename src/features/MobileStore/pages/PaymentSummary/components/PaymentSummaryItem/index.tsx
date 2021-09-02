import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Design from 'features/MobileStore/config/Design';

type Props = {
  /**
   * ImageUrl of the item.
   */
  img: string;

  /**
   * Name of the item.
   */
  name: string;

  /**
   * Number of item purchased.
   */
  quantity: number;

  /**
   * Price in cents
   */
  price: number;
};

const PaymentSummaryItem = ({img, name, quantity, price}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: img}} />
      <View style={styles.topRow}>
        <Text style={styles.name}>{name}</Text>
        <View>
          <Text style={styles.name}>x{quantity}</Text>
          <Text style={styles.name}>${(price * quantity) / 100}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 16,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Design.colors.reddishBrown,
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    color: Design.colors.reddishBrown,
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default PaymentSummaryItem;

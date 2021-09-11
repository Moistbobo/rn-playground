import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Design from 'features/MobileStore/config/Design';
import {shoppingCart} from 'assets/images';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  /**
   * Displays a number badge if greater than 0
   */
  numCartItems: number;

  /**
   * Onpress callback of the button
   */
  onPress: () => void;
};

const ShoppingCartButton = ({numCartItems, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={shoppingCart} style={styles.image} />
      {numCartItems > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{numCartItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    tintColor: Design.colors.reddishBrown,
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Design.colors.paleBrown,
  },
  badgeText: {
    fontSize: 14,
    color: Design.colors.beige,
  },
});

export default ShoppingCartButton;

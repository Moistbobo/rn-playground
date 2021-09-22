import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {dollarSign} from 'assets/images';

interface Props {
  /**
   * When the button is pressed.
   */
  onPress: () => void;
}

const PurchaseButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={{zIndex: 3}}>
      <Image source={dollarSign} style={styles.button} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: 'rgb(48,229,142)',
    tintColor: 'rgb(48,229,142)',
    borderWidth: 2,
    width: 40,
    height: 40,
    resizeMode: 'cover',
    padding: 8,
    borderRadius: 25,
  },
});

export default PurchaseButton;

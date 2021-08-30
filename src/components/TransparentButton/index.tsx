import React from 'react';
import {Text, ColorValue, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  /**
   * The button text
   */
  label: string;

  /**
   * When the button is pressed.
   */
  onPress: () => void;

  /**
   * Override button color
   * @default black
   */
  color?: ColorValue;
};

const TransparentButton = ({label, onPress, color}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        // @ts-ignore
        style={[styles.buttonText, color && {borderColor: color, color}]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    borderRadius: 8,
  },
});

export default TransparentButton;

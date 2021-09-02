import React from 'react';
import {
  Text,
  ColorValue,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

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

  /**
   * Shows activity indicator instead of label and disables touch if true
   */
  loading?: boolean;
};

const TransparentButton = ({label, onPress, color, loading}: Props) => {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      // @ts-ignore
      style={[styles.buttonStyle, color && {borderColor: color}]}
    >
      {loading ? (
        <ActivityIndicator color={color || 'black'} size={18} />
      ) : (
        // @ts-ignore
        <Text style={[styles.buttonText, {color}]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
    justifyContent: 'center',
  },
});

export default TransparentButton;

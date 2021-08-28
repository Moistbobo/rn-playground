import React from 'react';
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  containerStyle?: ViewStyle;

  tintColor?: ColorValue;

  image: ImageSourcePropType;

  onPress: () => void;
};

const ImageButton = ({containerStyle, tintColor, image, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerStyle || styles.defaultContainerStyle]}
    >
      <Image style={[styles.image, {tintColor}]} source={image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultContainerStyle: {},
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default ImageButton;

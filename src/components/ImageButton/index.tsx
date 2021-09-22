import React from 'react';
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

type Props = {
  /**
   * Override the container style (i.e positioning).
   */
  containerStyle?: ViewStyle;

  /**
   * Change the button's color.
   */
  tintColor?: ColorValue;

  /**
   * The image of the button.
   */
  image: ImageSourcePropType;

  /**
   * Override image style
   */
  imageStyle?: ImageStyle;

  /**
   * Callback to handle the button press.
   */
  onPress: () => void;
};

/**
 * A component that makes an image pressable with a callback.
 */
const ImageButton = ({
  containerStyle,
  tintColor,
  image,
  onPress,
  imageStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[containerStyle || styles.defaultContainerStyle]}
    >
      <Image
        // @ts-ignore
        style={[imageStyle || styles.image, tintColor && {tintColor}]}
        source={image}
      />
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

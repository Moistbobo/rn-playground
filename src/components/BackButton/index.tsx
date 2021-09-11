import React from 'react';
import {
  ColorValue,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {arrowLeft} from 'assets/images';
import {useNavigation} from '@react-navigation/native';

type Props = {
  /**
   * Override the container style.
   * @default Positions the button on the top left of the container.
   */
  containerStyle?: ViewStyle;

  /**
   * Adjust the color of the arrow. The default color of the image is white.
   */
  tintColor?: ColorValue;
};

/**
 * A left arrow button that calls goBack using react navigation hook.
 */
const BackButton = ({containerStyle, tintColor = 'black'}: Props) => {
  const {goBack} = useNavigation();

  return (
    <TouchableOpacity onPress={goBack} style={{...containerStyle}}>
      <Image style={[styles.image, {tintColor}]} source={arrowLeft} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BackButton;

import React from 'react';
import Animated from 'react-native-reanimated';
import ImageButton from 'components/ImageButton';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface Props {
  /**
   * The animated styles of the button
   */
  animatedStyles: StyleProp<ViewStyle>;

  /**
   * The button image
   */
  image: ImageSourcePropType;

  /**
   * The button's style
   */
  buttonStyle?: StyleProp<ImageStyle>;

  /**
   * Onpress handler of the sub button.
   */
  onPress?: () => void;
}

/**
 * The sub buttons that "slide out" from under the main buttons
 */
const SubButton = ({animatedStyles, buttonStyle, image, onPress}: Props) => {
  return (
    <Animated.View style={[animatedStyles, styles.container]}>
      <ImageButton image={image} imageStyle={buttonStyle} onPress={onPress} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

export default SubButton;

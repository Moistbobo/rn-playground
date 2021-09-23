import React from 'react';
import {
  AccessibilityProps,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import ImageButton from 'components/ImageButton';

interface Props extends AccessibilityProps {
  /**
   * Animated style of the button
   */
  animatedStyle: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;

  /**
   * Handler for when the button is clicked.
   */
  onPress: () => void;

  /**
   * Image of the button
   */
  buttonImage: ImageSourcePropType;
}

const GKAnimatedButton = ({animatedStyle, onPress, buttonImage}: Props) => {
  return (
    <Animated.View style={[animatedStyle, styles.button]}>
      <ImageButton
        image={buttonImage}
        imageStyle={styles.imageStyle}
        onPress={onPress}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
  },
  imageStyle: {
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

export default GKAnimatedButton;

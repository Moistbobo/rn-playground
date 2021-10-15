import React from 'react';
import Animated from 'react-native-reanimated';
import ImageButton from 'components/ImageButton';
import {ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';

interface Props {
  /**
   * The animated styles of the button
   */
  styles: StyleProp<ViewStyle>;

  /**
   * The button image
   */
  image: ImageSourcePropType;
}

const SubButton = ({styles, image}: Props) => {
  return (
    <Animated.View style={styles}>
      <ImageButton image={image} onPress={() => {}} />
    </Animated.View>
  );
};

export default SubButton;

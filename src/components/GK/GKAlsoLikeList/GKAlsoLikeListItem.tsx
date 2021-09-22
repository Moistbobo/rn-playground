import React from 'react';
import {
  AccessibilityProps,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import GKText from 'components/GK/GKText';
import Spacer from 'components/Spacer';

interface Props extends AccessibilityProps {
  /**
   * Callback when the button is pressed.
   */
  onPress: () => void;

  /**
   * Image of the list item.
   */
  image: ImageSourcePropType;

  /**
   * Label of the list item. Rendered under the image.
   */
  label: string;
}

const GKAlsoLikeListItem = ({onPress, image, label, ...rest}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} {...rest} style={styles.container}>
      <Image source={image} style={styles.image} />
      <Spacer size={8} />
      <GKText variant="subtitle">{label}</GKText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 125,
    height: 125,
    resizeMode: 'cover',
  },
});

export default GKAlsoLikeListItem;

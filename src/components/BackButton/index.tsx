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
  containerStyle?: ViewStyle;

  tintColor?: ColorValue;
};

const BackButton = ({containerStyle, tintColor}: Props) => {
  const {goBack} = useNavigation();

  return (
    <TouchableOpacity
      onPress={goBack}
      style={[containerStyle || styles.defaultContainerStyle]}
    >
      <Image style={[styles.image, {tintColor}]} source={arrowLeft} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultContainerStyle: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 99,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default BackButton;

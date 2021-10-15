import React from 'react';
import Animated from 'react-native-reanimated';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {plus, shoppingCart} from 'assets/images';
import SubButton from 'features/Reanimated/pages/AnimatedBottomTabs/components/AnimatedDrawerButton/SubButton';
import useAnimations from './animations';

interface Props {
  /**
   * OnPress callback.
   */
  onPress: () => void;
}

const AnimatedDrawerButton = ({onPress}: Props) => {
  const {opened, onPressed, buttonAnimations, mainButtonAnimatedStyles} =
    useAnimations();

  const onPressMainButton = () => {
    if (!opened) {
      onPress();
    }
    onPressed();
  };

  const [animOne, animTwo, animThree] = buttonAnimations;

  return (
    <View>
      <View style={styles.buttonContainer}>
        <SubButton
          styles={[animOne, styles.buttonStyle]}
          image={shoppingCart}
        />
        <SubButton
          styles={[animTwo, styles.buttonStyle]}
          image={shoppingCart}
        />
        <SubButton
          styles={[animThree, styles.buttonStyle]}
          image={shoppingCart}
        />
      </View>

      {/* createAnimatedComponent with touchable opacity creates some unwanted effects */}
      <Animated.View style={[mainButtonAnimatedStyles]}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressMainButton}
          style={[styles.button]}
        >
          <Image source={plus} style={styles.buttonIcon} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: 'green',
    borderRadius: (50 + 32) / 2,
    overflow: 'hidden',
  },
  buttonIcon: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'blue',
    padding: 8,
    margin: 4,
    borderRadius: 40,
    position: 'absolute',
  },
});

export default AnimatedDrawerButton;

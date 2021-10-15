import React from 'react';
import Animated from 'react-native-reanimated';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  BackHandler,
} from 'react-native';
import {plus, shoppingCart} from 'assets/images';
import SubButton from '../SubButton';
import useAnimations from './animations';

interface Props {
  /**
   * OnPress callback of the main button.
   */
  onPress?: () => void;

  /**
   * OnPress handlers for the 3 sub buttons
   */
  subButtonOnPress?: [() => void, () => void, () => void];
}

/**
 * The main button of the animated bottom tab button.
 * On Press, it will play a spinning animation, exposing 3 sub buttons from
 * underneath.
 */
const MainButton = ({onPress, subButtonOnPress}: Props) => {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', customBackHandler);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', customBackHandler);
  }, []);

  const {opened, onPressed, buttonAnimations, mainButtonAnimatedStyles} =
    useAnimations();

  const onPressMainButton = () => {
    if (!opened.value && onPress) {
      onPress();
    }
    onPressed();
  };

  /**
   * Custom back handler for android hardware back button,
   * hide the sub buttons if they are currently shown.
   */
  const customBackHandler = () => {
    if (opened.value) {
      onPressed();
      return true;
    }
    return false;
  };

  const [animOne, animTwo, animThree] = buttonAnimations;

  return (
    <View>
      <View style={styles.buttonContainer}>
        <SubButton
          animatedStyles={animOne}
          buttonStyle={styles.buttonStyle}
          image={shoppingCart}
          onPress={subButtonOnPress && subButtonOnPress[0]}
        />
        <SubButton
          animatedStyles={animTwo}
          buttonStyle={styles.buttonStyle}
          image={shoppingCart}
          onPress={subButtonOnPress && subButtonOnPress[1]}
        />
        <SubButton
          animatedStyles={animThree}
          buttonStyle={styles.buttonStyle}
          image={shoppingCart}
          onPress={subButtonOnPress && subButtonOnPress[2]}
        />
      </View>

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
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default MainButton;

import React from 'react';
import Animated from 'react-native-reanimated';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  BackHandler,
  ImageSourcePropType,
  ColorValue,
} from 'react-native';
import {plus} from 'assets/images';
import SubButton from '../SubButton';
import useAnimations from './animations';

type ButtonType = {
  backgroundColor: ColorValue;
  onPress: () => void;
  image: ImageSourcePropType;
};

interface Props {
  mainButton: ButtonType;

  /**
   * The data for the sub buttons. See the ButtonType type above for more details.
   */
  subButtons: [ButtonType, ButtonType, ButtonType];
}

/**
 * The main button of the animated bottom tab button.
 * On Press, it will play a spinning animation, exposing 3 sub buttons from
 * underneath.
 */
const ButtomTabButton = ({mainButton, subButtons}: Props) => {
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', customBackHandler);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', customBackHandler);
  }, []);

  const {opened, onPressed, buttonAnimations, mainButtonAnimatedStyles} =
    useAnimations();

  const onPressMainButton = () => {
    if (!opened.value && mainButton.onPress) {
      mainButton.onPress();
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
          buttonStyle={[
            styles.buttonStyle,
            // @ts-ignore
            subButtons[0].backgroundColor && {
              backgroundColor: subButtons[0].backgroundColor,
            },
          ]}
          image={subButtons[0].image}
          onPress={subButtons && subButtons[0].onPress}
        />
        <SubButton
          animatedStyles={animTwo}
          buttonStyle={[
            styles.buttonStyle,
            // @ts-ignore
            subButtons[1].backgroundColor && {
              backgroundColor: subButtons[1].backgroundColor,
            },
          ]}
          image={subButtons[1].image}
          onPress={subButtons && subButtons[1].onPress}
        />
        <SubButton
          animatedStyles={animThree}
          buttonStyle={[
            styles.buttonStyle,
            // @ts-ignore
            subButtons[2].backgroundColor && {
              backgroundColor: subButtons[2].backgroundColor,
            },
          ]}
          image={subButtons[2].image}
          onPress={subButtons && subButtons[2].onPress}
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

export default ButtomTabButton;

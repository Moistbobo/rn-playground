import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  WithSpringConfig,
  withTiming,
  WithTimingConfig,
} from 'react-native-reanimated';

const DELAY_STEP_MS = 150;

/**
 * Animation config for the spring animation used for the sub buttons.
 */
const SPRING_CONFIG: WithSpringConfig = {
  damping: 15,
};

/**
 * Animation config for the timing animation used for the main button.
 */
const TIMING_CONFIG: WithTimingConfig = {
  duration: 500,
};

/**
 * Animations for the animated bottom tab button component
 * Currently only supports 3 button positions
 */
const useAnimations = () => {
  const opened = useSharedValue(false);

  const rotation = useSharedValue(0);

  /**
   * Animation for the main bottom tab button
   */
  const mainButtonAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  /**
   * Animation for the left sub button
   */
  const buttonOneAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(opened.value ? -60 : 0, SPRING_CONFIG),
        },
        {
          translateY: withSpring(opened.value ? -60 : 0, SPRING_CONFIG),
        },
      ],
    };
  });

  /**
   * Animation for the middle sub button
   */
  const buttonTwoAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            DELAY_STEP_MS * (!opened.value ? 0 : 1),
            withSpring(opened.value ? -90 : 0, SPRING_CONFIG),
          ),
        },
      ],
    };
  });

  /**
   * Animation for the right sub button
   */
  const buttonThreeAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            DELAY_STEP_MS * (!opened.value ? 0 : 2),
            withSpring(opened.value ? 60 : 0, SPRING_CONFIG),
          ),
        },
        {
          translateY: withDelay(
            DELAY_STEP_MS * (!opened.value ? 0 : 2),
            withSpring(opened.value ? -60 : 0, SPRING_CONFIG),
          ),
        },
      ],
    };
  });

  const onPressed = () => {
    rotation.value = withTiming(opened.value ? 0 : 225, TIMING_CONFIG);

    opened.value = !opened.value;
  };

  return {
    opened,
    onPressed,
    mainButtonAnimatedStyles,
    buttonAnimations: [
      buttonOneAnimation,
      buttonTwoAnimation,
      buttonThreeAnimation,
    ],
  };
};

export default useAnimations;

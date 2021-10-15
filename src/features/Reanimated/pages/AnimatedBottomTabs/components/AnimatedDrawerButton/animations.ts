import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const DELAY_STEP_MS = 150;

const useAnimations = () => {
  const opened = useSharedValue(false);

  const rotation = useSharedValue(0);

  const mainButtonAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  const buttonOneAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(opened.value ? -60 : 0, {
            damping: 15,
          }),
        },
        {
          translateY: withSpring(opened.value ? -60 : 0, {
            damping: 15,
          }),
        },
      ],
    };
  });

  const buttonTwoAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            DELAY_STEP_MS * (!opened.value ? 0 : 1),
            withSpring(opened.value ? -90 : 0, {
              damping: 15,
            }),
          ),
        },
      ],
    };
  });

  const buttonThreeAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            DELAY_STEP_MS * (!opened.value ? 0 : 2),
            withSpring(opened.value ? 60 : 0, {
              damping: 15,
            }),
          ),
        },
        {
          translateY: withDelay(
            DELAY_STEP_MS * (!opened.value ? 0 : 2),
            withSpring(opened.value ? -60 : 0, {
              damping: 15,
            }),
          ),
        },
      ],
    };
  });

  const onPressed = () => {
    rotation.value = withTiming(opened.value ? 0 : 225, {
      duration: 500,
    });

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

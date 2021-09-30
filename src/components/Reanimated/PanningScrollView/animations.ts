import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
} from 'react-native-reanimated';

export const IMG_HEIGHT = 200;

const TRANSLATE_RATIO = 3;

const useAnimations = () => {
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  const animatedBadgeStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollOffset.value,
      [-IMG_HEIGHT, 0, IMG_HEIGHT / TRANSLATE_RATIO],
      [1.2, 1, 0.8],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffset.value,
      [0, IMG_HEIGHT / TRANSLATE_RATIO],
      [0, -IMG_HEIGHT / TRANSLATE_RATIO],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{translateY}],
    };
  });

  const animatedHeaderOverlay = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, IMG_HEIGHT / TRANSLATE_RATIO],
      [0, 0.4],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  });

  const animatedHeaderImageStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollOffset.value,
      [-IMG_HEIGHT, 0, IMG_HEIGHT / TRANSLATE_RATIO],
      [1.15, 1.1, 1.05],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });

  return {
    scrollHandler,
    animatedBadgeStyle,
    animatedHeaderStyle,
    animatedHeaderImageStyle,
    animatedHeaderOverlay,
  };
};

export default useAnimations;

import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Dimensions, ImageStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const {height} = Dimensions.get('window');

const IMAGE_SIZE = height * 0.33;

const BASE_IMAGE_STYLE: ImageStyle = {
  top: 30,
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  resizeMode: 'cover',
  position: 'absolute',
  alignSelf: 'center',
  zIndex: 2,
};

const useAnimations = () => {
  const scrollOffset = useSharedValue(0);
  const safeAreaInsets = useSafeAreaInsets();

  /**
   * Scroll handler to consume the scroll event.
   */
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  /**
   * Main image animation.
   * Scales down before translating up along the Y axis & fading away
   */
  const animatedImageStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollOffset.value,
      [-100, 0, 150],
      [1.2, 0.8, 0.4],
      Extrapolate.CLAMP,
    );

    const translateY = interpolate(
      scrollOffset.value,
      [0, 150, 375],
      [0, -scrollOffset.value, -scrollOffset.value * 2],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      scrollOffset.value,
      [0, 150, 300],
      [1, 1, 0],
      Extrapolate.CLAMP,
    );

    return {
      ...BASE_IMAGE_STYLE,
      opacity,
      transform: [
        {
          scale,
        },
        {
          translateY,
        },
      ],
    };
  }, []);

  /**
   * Animated header style. Fades in after the user has scrolled up to a certain amount.
   */
  const animatedHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollOffset.value,
      [0, 150, 300, 375],
      [0, 0, 0, 1],
    );

    return {
      position: 'absolute',
      width: '100%',
      backgroundColor: '#6ab0e2',
      zIndex: 2,
      opacity,
    };
  }, []);

  /**
   * Animated styles for the Purchase button. Scrolls along with the scrollview
   * content before stopping snugly on the header, while the underlying scrollview
   * continues to scroll.
   */
  const animatedButtonStyle = useAnimatedStyle(() => {
    const buttonTranslationDistance = IMAGE_SIZE + 32;
    const translateY = interpolate(
      scrollOffset.value || 0,
      [-buttonTranslationDistance, 0, buttonTranslationDistance], // last value has to be the same as second index of outputRange
      [buttonTranslationDistance * 2, buttonTranslationDistance, 0], // calculate this based on safearea + image + image offset + spacer
      Extrapolate.CLAMP,
    );

    const newCompensation = safeAreaInsets.top + 32;

    return {
      position: 'absolute',
      right: 16,
      top: newCompensation,
      zIndex: 3,
      transform: [
        {
          translateY,
        },
      ],
    };
  }, []);

  return {
    scrollOffset,
    animatedImageStyle,
    animatedHeaderStyle,
    animatedButtonStyle,
    scrollHandler,
  };
};

export default useAnimations;

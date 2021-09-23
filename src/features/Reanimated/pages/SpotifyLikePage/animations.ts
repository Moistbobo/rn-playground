import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const IMAGE_SIZE = Dimensions.get('window').height * 0.33;

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
   * Scales smaller before translating up along the Y axis & fading away
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
      top: safeAreaInsets.top,
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      resizeMode: 'cover',
      position: 'absolute',
      alignSelf: 'center',
      zIndex: 1,
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
      zIndex: 1,
      opacity,
    };
  }, []);

  /**
   * Animated styles for the Purchase button. Scrolls along with the scrollview
   * content before stopping snugly on the header, while the underlying scrollview
   * continues to scroll.
   *
   * The idea behind the purchase button is that the button starts translated along the
   * y axis, and the translateY value slowly goes to 0 as the user scrolls up.
   * My original approach was to translate the button along with the scroll before capping
   * the maximum translation value so it stops at the right position (half on half off the fading header),
   * but I felt that it was too difficult to get that method to work across different device
   * screens, as well as supporting devices with notches
   */
  const animatedButtonStyle = useAnimatedStyle(() => {
    // 32 is from the verticalPadding of the fading header
    const buttonTranslationDistance = IMAGE_SIZE + 32;

    const translateY = interpolate(
      scrollOffset.value || 0,
      [-buttonTranslationDistance, 0, buttonTranslationDistance],
      [buttonTranslationDistance * 2, buttonTranslationDistance, 0],
      Extrapolate.CLAMP,
    );

    const newCompensation = safeAreaInsets.top + 32;

    return {
      position: 'absolute',
      right: 16,
      top: newCompensation,
      zIndex: 2,
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

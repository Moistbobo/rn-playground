import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  Extrapolate,
  useDerivedValue,
} from 'react-native-reanimated';
import {LayoutChangeEvent} from 'react-native';

export const IMG_HEIGHT = 200;

const TRANSLATE_RATIO = 3;

const useAnimations = () => {
  const scrollOffset = useSharedValue(1);
  const scrollContentSize = useSharedValue(1);
  const scrollSize = useSharedValue(1);

  /**
   * Measure the size of the scrollView onLayout
   * @param event - Layout change event
   */
  const onLayout = (event: LayoutChangeEvent) => {
    scrollSize.value = event.nativeEvent.layout.height;
  };

  /**
   * Measure the total size of the scroll content (onLayout)
   * @param _ - The width, underscore so it is ignored by eslint.
   * @param h - The height of the content
   */
  const onContentSizeChange = (_: number, h: number) => {
    scrollContentSize.value = h;
  };

  /**
   * Handler to subscrive to scroll events
   */
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  /**
   * Derived value that represents the total progress of the scrollView that has
   * been scrolled.
   *
   * Example: 0 = scrollView has not been scrolled
   *          1 = scrollView has been completely scrolled to the bottom
   */
  const scrollPercent = useDerivedValue(() => {
    return scrollOffset.value / (scrollContentSize.value - scrollSize.value);
  }, []);

  /**
   * Animated the badge image so it scales smaller as the scrollView is scrolled up.
   */
  const animatedBadgeStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollPercent.value,
      [0, 0.15],
      [1.2, 0.8],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
    };
  });

  /**
   * Animated the header so that it translated up along with the scroll,
   * creating the illusion of a scrollView that pans before the actual
   * scroll occurs.
   */
  const animatedHeaderStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollPercent.value,
      [0, 0.15],
      [0, -IMG_HEIGHT / TRANSLATE_RATIO],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{translateY}],
    };
  });

  /**
   * Fade in the header overlay as the scrollView is scrolled up.
   */
  const animatedHeaderOverlay = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollPercent.value,
      [0, 0.15],
      [0, 0.4],
      Extrapolate.CLAMP,
    );

    return {
      opacity,
    };
  });

  /**
   * Scale down the header image as the scrollView is scrolled.
   */
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
    onContentSizeChange,
    onLayout,
  };
};

export default useAnimations;

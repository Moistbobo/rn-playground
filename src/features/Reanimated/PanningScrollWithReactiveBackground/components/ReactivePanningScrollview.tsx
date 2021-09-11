import * as React from 'react';
import {ColorValue, Dimensions, StyleSheet, View} from 'react-native';

import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  Extrapolate,
  useDerivedValue,
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, {Path} from 'react-native-svg';

const SIZE = Dimensions.get('window');
const AnimatedPath = Animated.createAnimatedComponent(Path);

type Props = {
  /**
   * Scrollview content.
   */
  children: React.ReactNode | React.ReactNodeArray;

  /**
   * The main color;
   * @default #2E5077
   */
  mainColor?: ColorValue;

  /**
   * The sub color
   * @default #4DA1A9
   */
  subColor?: ColorValue;

  /**
   * Distance that the scrollview can pan until it begins to scroll.
   * @default 200
   */
  panHeight?: number;

  /**
   * Minimum distance of the scrollview from the top of the screen
   * @default 100
   */
  minTopSpacing?: number;
};

const ReactivePanningScrollview = ({
  children,
  mainColor = '#2E5077',
  subColor = '#4DA1A9',
  panHeight = 100,
  minTopSpacing = 25,
}: Props) => {
  const scrollOffset = useSharedValue(0);
  const contentHeight = useSharedValue(0);

  const panningViewStyle = useAnimatedStyle(() => {
    const interpolatedValue = interpolate(
      scrollOffset.value,
      [scrollOffset.value, panHeight],
      [-scrollOffset.value, -panHeight + minTopSpacing],
      Extrapolate.CLAMP,
    );

    return {
      transform: [
        {
          translateY: Math.max(
            interpolatedValue,
            -panHeight + minTopSpacing / 2,
          ),
        },
      ],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  const droopingAnimation = useDerivedValue(() => {
    const interpolatedValue = interpolate(
      scrollOffset.value,
      [-200, SIZE.height],
      [0, SIZE.height * 2.5],
      Extrapolate.CLAMP,
    );

    return {
      y: interpolatedValue,
    };
  });

  const bottomPath = useAnimatedProps(() => {
    const {
      value: {y},
    } = droopingAnimation;

    return {
      d: `M -50 ${-SIZE.height} 
      C ${-25} ${SIZE.height + y}, ${SIZE.width + 20} ${SIZE.height + y}, 
      ${SIZE.width + 50} ${-SIZE.height}`,
    };
  });

  return (
    <View style={[styles.container, {backgroundColor: mainColor}]}>
      <Svg
        style={styles.svgContainer}
        width={SIZE.width}
        height={SIZE.height}
        viewBox={`0 0 ${SIZE.width} ${SIZE.height}`}
      >
        <AnimatedPath fill={subColor as string} animatedProps={bottomPath} />
      </Svg>
      <Animated.View
        style={[styles.header, panningViewStyle, {top: minTopSpacing / 2}]}
      >
        <View style={[styles.fakeTop, {top: panHeight - 14}]}>
          <View style={styles.fakeHeader} />
        </View>
      </Animated.View>
      <MaskedView
        style={styles.container}
        maskElement={
          <View style={styles.maskElementContainer}>
            <View style={[styles.maskElementContent, {top: minTopSpacing}]} />
          </View>
        }
      >
        <Animated.ScrollView
          overScrollMode="never"
          alwaysBounceVertical
          scrollEventThrottle={1}
          onScroll={scrollHandler}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.contentContainerStyle,
            {paddingBottom: minTopSpacing / 2},
          ]}
          onContentSizeChange={(x, y) => {
            contentHeight.value = y;
          }}
        >
          <View
            style={{
              height: panHeight + minTopSpacing / 2,
            }}
          />
          <View
            style={[styles.innerContent, {paddingBottom: minTopSpacing / 2}]}
            onLayout={event => {
              contentHeight.value = event.nativeEvent.layout.y;
            }}
          >
            {children}
          </View>
        </Animated.ScrollView>
      </MaskedView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    width: '100%',
  },
  fakeTop: {
    width: '90%',
    alignSelf: 'center',
    height: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  contentContainerStyle: {
    width: '100%',
    alignSelf: 'center',
  },
  fakeHeader: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  innerContent: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  svgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  maskElementContainer: {
    width: SIZE.width,
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  maskElementContent: {
    width: '90%',
    height: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});

export default ReactivePanningScrollview;

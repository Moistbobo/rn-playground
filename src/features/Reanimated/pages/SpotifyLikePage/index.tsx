import React from 'react';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import {
  Dimensions,
  ImageStyle,
  LayoutChangeEvent,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {mdr1} from 'assets/images';
import Spacer from 'components/Spacer';
import ActionButtonsRow from 'components/GK/ActionButtonsRow';
import PurchaseButton from 'components/GK/PurchaseButton';
import CharaDetails from 'features/Reanimated/pages/SpotifyLikePage/components/CharaDetails';

const {height} = Dimensions.get('window');

const IMAGE_SIZE = height * 0.33;

const FADE_HEADER_HEIGHT = height * 0.1;

const BASE_IMAGE_STYLE: ImageStyle = {
  top: 20,
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  resizeMode: 'cover',
  position: 'absolute',
  alignSelf: 'center',
};

const headerCompensation = FADE_HEADER_HEIGHT - 40 + height * 0.24;

const SpotifyLikePage = () => {
  const scrollOffset = useSharedValue(0);
  const contentSize = useSharedValue(0);
  const viewSize = useSharedValue(0);

  const scrollPercentage = useDerivedValue(() => {
    if (!contentSize || !viewSize) return 0;

    return scrollOffset.value / (contentSize.value - viewSize.value);
  }, [contentSize, viewSize]);

  const mainImageStyle = useAnimatedStyle(() => {
    if (!scrollPercentage) {
      return BASE_IMAGE_STYLE;
    }
    const scale = interpolate(
      scrollPercentage.value || 0,
      [-1, 0, 0.15, 0.25],
      [1, 0.8, 0.5, 0.5],
      Extrapolate.CLAMP,
    );

    const translateY = interpolate(
      scrollPercentage.value || 0,
      [0, 0.2, 0.25],
      [0, -IMAGE_SIZE * 0.55, -IMAGE_SIZE],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      scrollPercentage.value || 0,
      [0, 0.1, 0.2],
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
  }, [scrollPercentage]);

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollPercentage.value || 0,
      [0, 0.1, 0.2, 0.25],
      [0, 0, 0, 1],
    );

    return {
      position: 'absolute',
      width: '100%',
      height: FADE_HEADER_HEIGHT,
      backgroundColor: 'gray',
      zIndex: 2,
      opacity,
    };
  }, [scrollPercentage]);

  const animatedButtonStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffset.value || 0,
      [-1000, 0, (height - headerCompensation) / 2],
      [1000, 0, (-height + headerCompensation) / 2],
      Extrapolate.CLAMP,
    );

    return {
      position: 'absolute',
      right: 16,
      top: height * 0.43,
      zIndex: 3,
      transform: [
        {
          translateY,
        },
      ],
    };
  }, [scrollPercentage]);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollOffset.value = event.contentOffset.y;
    },
  });

  const onLayout = (event: LayoutChangeEvent) => {
    viewSize.value = event.nativeEvent.layout.height;
  };

  const onContentSizeChange = (_: number, h: number) => {
    contentSize.value = h;
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="rgb(153,153,153)"
        barStyle="light-content"
      />
      <Animated.View style={animatedHeaderStyle} />
      <Animated.Image source={mdr1} style={[mainImageStyle]} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onLayout={onLayout}
        onContentSizeChange={onContentSizeChange}
        contentContainerStyle={styles.contentContainer}
      >
        <Spacer size={IMAGE_SIZE} orientation="vertical" />

        <CharaDetails
          name="MDR"
          makeNumber="No. 215"
          description="Desert Tech ● Micro Dynamic Rifle"
        />

        <ActionButtonsRow
          onPressLike={() => {}}
          onPressDl={() => {}}
          onPressMore={() => {}}
        />

        <Spacer size={1600} orientation="vertical" />
      </Animated.ScrollView>
      <Animated.View style={[animatedButtonStyle, {position: 'absolute'}]}>
        <PurchaseButton onPress={() => {}} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    color: 'rgb(153,153,153)',
    fontSize: 12,
  },
});

export default SpotifyLikePage;

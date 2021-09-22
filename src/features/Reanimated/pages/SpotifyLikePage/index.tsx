import React from 'react';
import Animated, {
  interpolate,
  Extrapolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  Dimensions,
  ImageStyle,
  LayoutChangeEvent,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {mdr1} from 'assets/images';
import Spacer from 'components/Spacer';
import ActionButtonsRow from 'components/GK/ActionButtonsRow';
import PurchaseButton from 'components/GK/PurchaseButton';
import CharaDetails from 'features/Reanimated/pages/SpotifyLikePage/components/CharaDetails';
import GKListItem from 'components/GK/GKListItem';
import GKListSummary from 'components/GK/GKListSummary';
import GKRow from 'components/GK/GKRow';
import GKAlsoLikeList from 'components/GK/GKAlsoLikeList';
import GKText from 'components/GK/GKText';
import LinearGradient from 'react-native-linear-gradient';
import BackButton from 'components/BackButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {hasNotch} from 'react-native-device-info';

const {height} = Dimensions.get('window');

const IMAGE_SIZE = height * 0.33;

const FADE_HEADER_HEIGHT = 20 + height * 0.08;

const BASE_IMAGE_STYLE: ImageStyle = {
  top: 30,
  width: IMAGE_SIZE,
  height: IMAGE_SIZE,
  resizeMode: 'cover',
  position: 'absolute',
  alignSelf: 'center',
  zIndex: 2,
};

const headerCompensation =
  FADE_HEADER_HEIGHT - (hasNotch() ? -4 : 30) + height * 0.22;

const SpotifyLikePage = () => {
  const scrollOffset = useSharedValue(0);
  const contentSize = useSharedValue(0);
  const viewSize = useSharedValue(0);

  const mainImageStyle = useAnimatedStyle(() => {
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
  }, []);

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
      <Animated.View style={animatedHeaderStyle}>
        <SafeAreaView style={styles.headerGroup} edges={['top']}>
          <LinearGradient
            colors={['#6ab0e2', '#2d4454']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={{position: 'absolute', top: 0, right: 0, left: 0, bottom: 0}}
          />
          <BackButton tintColor="white" size={20} />
          <Spacer size={24} orientation="horizontal" />
          <GKText variant="subtitle">MDR - Micro Dynamic Rifle</GKText>
        </SafeAreaView>
      </Animated.View>
      <Animated.Image source={mdr1} style={[mainImageStyle]} />

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onLayout={onLayout}
        onContentSizeChange={onContentSizeChange}
      >
        <LinearGradient
          colors={['#6ab0e2', '#000000']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={styles.backdrop}
        />

        <View style={styles.innerContentWrapper}>
          <Spacer size={IMAGE_SIZE + 30} orientation="vertical" />

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

          <Spacer size={16} />

          {dummyListItems.map(item => (
            <>
              <GKListItem
                onPressItem={() => {}}
                onPressMore={() => {}}
                label={item.label}
                subtitle={item.subtitle}
              />
              <Spacer size={16} />
            </>
          ))}

          <GKListSummary date={new Date().toISOString()} line2="2 Costumes" />
          <Spacer size={16} />

          <GKRow label="Griffin & Kryuger PMC" iconSize={50} />
          <Spacer size={16} />
        </View>

        <GKAlsoLikeList
          onItemPress={() => () => {}}
          label="You may also like"
          data={dummyAlsoLikeList}
        />
        <Spacer size={32} />

        <GKText variant="subtitle">
          © SUNBORN Network Technology Co., Ltd. All Rights Reserved.
        </GKText>

        <Spacer size={height * 0.35} />
      </Animated.ScrollView>
      <Animated.View style={[animatedButtonStyle, {position: 'absolute'}]}>
        <PurchaseButton onPress={() => {}} />
      </Animated.View>
    </View>
  );
};

const dummyListItems = [
  {
    label: 'Spirit Trap',
    subtitle: 'Alternate Costume A',
  },
  {
    label: 'Cocktail Observer',
    subtitle: 'Alternate Costume B',
  },
];

const dummyAlsoLikeList = [
  {
    image: 'https://i.imgur.com/NU7zuAZ.png',
    label: 'AA-12',
  },
  {
    image: 'https://i.imgur.com/pLYOYoS.png',
    label: 'HK-416',
  },
  {
    image: 'https://i.imgur.com/nPGTGXe.png',
    label: 'AK-12',
  },
  {
    image: 'https://i.imgur.com/4LcELwW.png',
    label: 'AK-Alfa',
  },
  {
    image: 'https://i.imgur.com/CZS3enL.png',
    label: 'AN-94',
  },
];

const calculateBackdropOffset = () => {
  if (Platform.OS === 'android') {
    const statusBarHeight = StatusBar.currentHeight;
    return statusBarHeight || 1 * 0;
  } else {
    return 0;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerContentWrapper: {
    zIndex: 2,
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
  backdrop: {
    width: '100%',
    height: calculateBackdropOffset() + height * 0.71,
    backgroundColor: 'rgba(153,153,153,0.3)',
    position: 'absolute',
    top: -height * 0.25,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerGroup: {
    paddingLeft: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});

export default SpotifyLikePage;

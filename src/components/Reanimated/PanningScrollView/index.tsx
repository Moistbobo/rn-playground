import React from 'react';
import {
  ColorValue,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';

import useAnimations, {IMG_HEIGHT} from './animations';

const FAKE_BORDER_HEIGHT = 30;

type Props = {
  /**
   * The content of the scrollview.
   */
  children: React.ReactNode | React.ReactNodeArray;

  /**
   * The header background image that slowly disappears as the scrollview is scrolled.
   */
  headerImage?: ImageSourcePropType;

  /**
   * The image that wll be shown in a circle on the top-center of the scrollview.
   */
  badgeImage?: ImageSourcePropType;

  /**
   * The background color of the scrollview content container.
   * @default white
   */
  backgroundColor?: ColorValue;

  /**
   * The color which the header will fade into when the scrollview is scrolled up.
   * @default white
   */
  headerOverlayColor?: ColorValue;
};

const PanningScrollView = ({
  headerImage,
  badgeImage,
  children,
  backgroundColor = 'white',
  headerOverlayColor = 'white',
}: Props) => {
  const {
    scrollHandler,
    animatedBadgeStyle,
    animatedHeaderImageStyle,
    animatedHeaderStyle,
    animatedHeaderOverlay,
  } = useAnimations();

  return (
    <>
      <Animated.View style={[styles.header, animatedHeaderStyle]}>
        {headerImage ? (
          <>
            <Animated.Image
              style={[styles.headerImage, animatedHeaderImageStyle]}
              source={headerImage}
              testID="image-header"
            />
            <Animated.View
              style={[
                styles.headerOverlay,
                animatedHeaderOverlay,
                // @ts-ignore
                headerOverlayColor && {backgroundColor: headerOverlayColor},
              ]}
            />
          </>
        ) : (
          <View style={styles.headerImage} testID="view-header-placeholder" />
        )}
        {badgeImage ? (
          <Animated.View style={[styles.badgeContainer, animatedBadgeStyle]}>
            <Image
              source={badgeImage}
              style={styles.badgeImage}
              testID="image-badge"
            />
          </Animated.View>
        ) : undefined}
        <View style={[styles.fakeBorder, {backgroundColor}]} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          {backgroundColor},
        ]}
      >
        <View style={[styles.placeholder]} />
        {children}
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    height: IMG_HEIGHT + FAKE_BORDER_HEIGHT / 2,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    resizeMode: 'cover',
    zIndex: 1,
  },
  headerImage: {
    height: IMG_HEIGHT,
    resizeMode: 'cover',
    backgroundColor: 'white',
  },
  headerOverlay: {
    height: IMG_HEIGHT,
    width: '100%',
    position: 'absolute',
  },
  contentContainerStyle: {
    backgroundColor: 'white',
    paddingTop: 8,
  },
  fakeBorder: {
    width: '100%',
    alignSelf: 'center',
    height: FAKE_BORDER_HEIGHT,
    zIndex: 2,
    top: -FAKE_BORDER_HEIGHT / 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  badgeContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 16,
    borderRadius: 75,
    padding: 4,
    backgroundColor: 'white',
    zIndex: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 5,
  },
  badgeImage: {
    height: 75,
    width: 75,
    borderRadius: 50,
  },
});

export default PanningScrollView;

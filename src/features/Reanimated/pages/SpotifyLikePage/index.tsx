import React from 'react';
import Animated from 'react-native-reanimated';
import {Dimensions, FlatList, StatusBar, StyleSheet, View} from 'react-native';
import {dollarSign, mdr1} from 'assets/images';
import Spacer from 'components/Spacer';
import ActionButtonsRow from 'components/GK/ActionButtonsRow';
import GKCharaDetails from 'components/GK/GKCharaDetails';
import GKListItem from 'components/GK/GKListItem';
import GKListSummary from 'components/GK/GKListSummary';
import GKRow from 'components/GK/GKRow';
import GKAlsoLikeList from 'components/GK/GKAlsoLikeList';
import GKText from 'components/GK/GKText';
import useAnimations from 'features/Reanimated/pages/SpotifyLikePage/animations';
import AnimatedHeader from 'features/Reanimated/pages/SpotifyLikePage/components/AnimatedHeader';
import GKAnimatedButton from 'features/Reanimated/pages/SpotifyLikePage/components/GKAnimatedButton';
import {
  alsoLike,
  costumeList,
} from 'features/Reanimated/pages/SpotifyLikePage/data';
import Backdrop from 'features/Reanimated/pages/SpotifyLikePage/components/Backdrop';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {showFlashMessage} from 'lib/FlashMessageWrapper';

const {height} = Dimensions.get('window');

// dummy space so the scrollview can be scrolled enough to trigger animations */
const DUMMY_SPACE = height * 0.45;

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

/**
 * A page that imitates the spotify album page's scroll effect
 */
const SpotifyLikePage = () => {
  const {
    scrollHandler,
    animatedImageStyle,
    animatedHeaderStyle,
    animatedButtonStyle,
    imageSize,
  } = useAnimations();

  const {top: topSafeAreaInset} = useSafeAreaInsets();

  const renderItem = ({item}: any) => (
    <View style={styles.innerContentWrapper}>
      <GKListItem
        onPressItem={() => {
          showFlashMessage(item.label);
        }}
        onPressMore={() => {
          showFlashMessage(`${item.label}-more`);
        }}
        label={item.label}
        subtitle={item.subtitle}
      />
    </View>
  );

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <AnimatedHeader
        label="MDR - Micro Dynamic Rifle"
        animatedStyle={animatedHeaderStyle}
      />

      <Animated.Image source={mdr1} style={[animatedImageStyle]} />
      <AnimatedFlatList
        style={styles.container}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        // disable overscroll effect on android 12
        overScrollMode="never"
        ListHeaderComponent={() => {
          return (
            <>
              <Backdrop />

              <View style={styles.innerContentWrapper}>
                <Spacer
                  size={imageSize + topSafeAreaInset}
                  orientation="vertical"
                />

                <GKCharaDetails
                  name="MDR"
                  makeNumber="No. 215"
                  description="Desert Tech ● Micro Dynamic Rifle"
                />

                <ActionButtonsRow
                  onPressLike={() => {
                    showFlashMessage('like');
                  }}
                  onPressDl={() => {
                    showFlashMessage('download');
                  }}
                  onPressMore={() => {
                    showFlashMessage('more');
                  }}
                />

                <Spacer size={16} />
              </View>
            </>
          );
        }}
        ListFooterComponent={() => {
          return (
            <>
              <Spacer size={16} />
              <View style={styles.innerContentWrapper}>
                <GKListSummary
                  date={new Date().toISOString()}
                  line2="2 Costumes"
                />
                <Spacer size={16} />

                <GKRow label="Griffin & Kryuger PMC" iconSize={50} />
                <Spacer size={16} />
              </View>

              <GKAlsoLikeList
                onItemPress={_item => () => {
                  showFlashMessage(_item.label);
                }}
                label="You may also like"
                data={alsoLike}
              />
              <Spacer size={32} />

              <GKText variant="subtitle">
                © SUNBORN Network Technology Co., Ltd. All Rights Reserved.
              </GKText>

              <Spacer size={DUMMY_SPACE} />
            </>
          );
        }}
        ItemSeparatorComponent={() => <Spacer size={16} />}
        data={costumeList}
        renderItem={renderItem}
      />
      <GKAnimatedButton
        animatedStyle={animatedButtonStyle}
        onPress={() => {
          showFlashMessage('purchase');
        }}
        buttonImage={dollarSign}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerContentWrapper: {
    zIndex: 1,
    paddingHorizontal: 16,
  },
});

export default SpotifyLikePage;

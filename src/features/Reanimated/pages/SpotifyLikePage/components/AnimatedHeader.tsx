import React from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import BackButton from 'components/BackButton';
import Spacer from 'components/Spacer';
import GKText from 'components/GK/GKText';

interface Props {
  /**
   * Label of the header.
   */
  label: string;

  /**
   * Animated style of the container.
   */
  animatedStyle: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

const linearGradientProps: LinearGradientProps = {
  colors: ['#6ab0e2', '#2d4454'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
  style: {position: 'absolute', top: 0, right: 0, left: 0, bottom: 0},
};

const AnimatedHeader = ({label, animatedStyle}: Props) => {
  return (
    <Animated.View style={animatedStyle}>
      <SafeAreaView style={styles.headerGroup} edges={['top']}>
        <LinearGradient {...linearGradientProps} />
        <BackButton tintColor="white" size={20} />
        <Spacer size={24} orientation="horizontal" />
        <GKText variant="subtitle">{label}</GKText>
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  headerGroup: {
    paddingLeft: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
});

export default AnimatedHeader;

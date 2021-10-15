import React from 'react';
import CenterViewWithNavigation from 'storybook/stories/CenterViewWithNavigation';
import {storiesOf} from '@storybook/react-native';
import AnimatedBottomTabButton from 'features/Reanimated/pages/AnimatedBottomTabButton/index';
import FlashMessage from 'react-native-flash-message';

storiesOf('navigation', module)
  .addDecorator(getStories => (
    <CenterViewWithNavigation>
      {getStories()}
      <FlashMessage position="top" />
    </CenterViewWithNavigation>
  ))
  .add('AnimatedBottomTabButton', () => <AnimatedBottomTabButton />);

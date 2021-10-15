import React from 'react';
import CenterViewWithNavigation from 'storybook/stories/CenterViewWithNavigation';
import {storiesOf} from '@storybook/react-native';
import AnimatedBottomTabButton from 'features/Reanimated/pages/AnimatedBottomTabs/index';

storiesOf('navigation', module)
  .addDecorator(getStories => (
    <CenterViewWithNavigation>{getStories()}</CenterViewWithNavigation>
  ))
  .add('AnimatedBottomTabButton', () => <AnimatedBottomTabButton />);

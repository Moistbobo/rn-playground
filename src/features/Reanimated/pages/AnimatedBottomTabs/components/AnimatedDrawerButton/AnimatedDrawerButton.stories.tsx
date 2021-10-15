import React from 'react';
import AnimatedDrawerButton from 'features/Reanimated/pages/AnimatedBottomTabs/components/AnimatedDrawerButton';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import CenterView from 'storybook/stories/CenterView';

storiesOf('components', module)
  .addDecorator(getStories => (
    <CenterView justifyContent="flex-end">{getStories()}</CenterView>
  ))
  .add('AnimatedDrawerButton', () => (
    <AnimatedDrawerButton onPress={action('onPress')} />
  ));

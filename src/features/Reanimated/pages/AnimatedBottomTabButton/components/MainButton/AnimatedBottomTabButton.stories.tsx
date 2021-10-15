import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import MainButton from 'features/Reanimated/pages/AnimatedBottomTabButton/components/MainButton/index';
import {action} from '@storybook/addon-actions';

storiesOf('components', module)
  .addDecorator(getStories => (
    <CenterView justifyContent="flex-end" alignContent={undefined}>
      {getStories()}
    </CenterView>
  ))
  .add('AnimatedDrawerButton', () => (
    <MainButton
      onPress={action('onPress')}
      subButtonOnPress={[
        action('Sub Press 1'),
        action('Sub Press 2'),
        action('Sub Press 3'),
      ]}
    />
  ));

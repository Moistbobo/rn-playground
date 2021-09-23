import React from 'react';
import CenterView from 'storybook/stories/CenterView';
import {storiesOf} from '@storybook/react-native';
import ActionButtonsRow from 'components/GK/ActionButtonsRow/index';
import {action} from '@storybook/addon-actions';

storiesOf('components/GK', module)
  .addDecorator(getStories => (
    <CenterView backgroundColor="black">{getStories()}</CenterView>
  ))
  .add('ActionButtons', () => (
    <ActionButtonsRow
      onPressLike={action('onPressLike')}
      onPressDl={action('onPressDl')}
      onPressMore={action('onPressMore')}
    />
  ));

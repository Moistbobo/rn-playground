import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import TransparentButton from 'components/TransparentButton/index';
import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

storiesOf('components', module)
  .addDecorator(getStories => <CenterView>{getStories()}</CenterView>)
  .add('TransparentButton', () => (
    <TransparentButton
      label={text('label', 'label')}
      onPress={action('onPress')}
      color={text('color', 'black')}
    />
  ));

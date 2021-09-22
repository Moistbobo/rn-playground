import React from 'react';
import CenterView from 'storybook/stories/CenterView';
import {storiesOf} from '@storybook/react-native';
import GKLogo from 'components/GK/GKLogo/index';
import {number} from '@storybook/addon-knobs';

storiesOf('components/GK', module)
  .addDecorator(getStories => (
    <CenterView backgroundColor="gray">{getStories()}</CenterView>
  ))
  .add('GKLogo', () => <GKLogo size={number('size', 50)} />);

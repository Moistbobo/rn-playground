import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import GKText from 'components/GK/GKText/index';
import {text} from '@storybook/addon-knobs';

storiesOf('components/GK/GKText', module)
  .addDecorator(getStories => (
    <CenterView backgroundColor="black">{getStories()}</CenterView>
  ))
  .add('Header', () => (
    <GKText variant="header">{text('text', 'header')}</GKText>
  ))
  .add('Subtitle', () => (
    <GKText variant="subtitle">{text('text', 'subtitle')}</GKText>
  ))
  .add('Description', () => (
    <GKText variant="description">{text('text', 'description')}</GKText>
  ));

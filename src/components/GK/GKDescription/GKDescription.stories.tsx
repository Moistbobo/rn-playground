import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import React from 'react';
import GKDescription from 'components/GK/GKDescription/index';
import {text} from '@storybook/addon-knobs';

storiesOf('components/GK', module)
  .addDecorator(getStories => (
    <CenterView backgroundColor="black">{getStories()}</CenterView>
  ))
  .add('GKDescription', () => (
    <GKDescription>{text('text', 'text')}</GKDescription>
  ));

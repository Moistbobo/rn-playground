import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import GKRow from 'components/GK/GKRow/index';
import {text} from '@storybook/addon-knobs';

storiesOf('components/GK', module)
  .addDecorator(getStories => <CenterView>{getStories()}</CenterView>)
  .add('GKRow', () => <GKRow label={text('label', 'label')} />);

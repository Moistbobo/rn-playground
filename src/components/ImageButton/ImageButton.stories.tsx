import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ImageButton from 'components/ImageButton/index';
import {plus} from 'assets/images';
import {action} from '@storybook/addon-actions';
import CenterViewWithNavigation from '../../../storybook/stories/CenterViewWithNavigation';

storiesOf('components', module)
  .addDecorator(getStories => (
    <CenterViewWithNavigation backgroundColor="gray">
      {getStories()}
    </CenterViewWithNavigation>
  ))
  .add('ImageButton', () => (
    <ImageButton image={plus} onPress={action('onPress')} />
  ));

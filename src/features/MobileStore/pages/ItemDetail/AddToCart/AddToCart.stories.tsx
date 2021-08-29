import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import CenterViewWithNavigation from 'storybook/stories/CenterViewWithNavigation';
import AddToCart from './index';

storiesOf('MobileStore/components', module)
  .addDecorator(getStories => (
    <CenterViewWithNavigation>{getStories()}</CenterViewWithNavigation>
  ))
  .add('AddToCart', () => <AddToCart onPressAdd={action('onPressAdd')} />);

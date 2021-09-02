import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import ShoppingCartButton from 'features/MobileStore/components/ShoppingCartButton/index';
import {number} from '@storybook/addon-knobs';
import CenterViewWithNavigation from '../../../../../storybook/stories/CenterViewWithNavigation';

storiesOf('MobileStore/components/ShoppingCartButton', module)
  .addDecorator(getStories => (
    <CenterViewWithNavigation>{getStories()}</CenterViewWithNavigation>
  ))
  .add('with number', () => (
    <ShoppingCartButton
      onPress={action('onPress')}
      numCartItems={number('numCartItems', 10)}
    />
  ))
  .add('without number', () => (
    <ShoppingCartButton onPress={action('onPress')} numCartItems={0} />
  ));

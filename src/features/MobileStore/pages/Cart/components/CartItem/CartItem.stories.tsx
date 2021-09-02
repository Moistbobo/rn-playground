import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import {number, text} from '@storybook/addon-knobs';
import {action} from '@storybook/addon-actions';
import CartItem from './index';

storiesOf('MobileStore/components', module)
  .addDecorator(getStories => <CenterView>{getStories()}</CenterView>)
  .add('CartItem', () => (
    <CartItem
      img="https://i.imgur.com/hEalPMX.png"
      name={text('name', 'ItemName')}
      quantity={number('quantity', 10)}
      price={number('price', 100)}
      onDeleteCartItem={action('onDeleteCartItem')}
      onConfirmEditCart={action('onConfirmEditCart')}
    />
  ));

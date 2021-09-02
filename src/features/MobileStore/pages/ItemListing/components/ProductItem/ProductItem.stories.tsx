import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {number, text} from '@storybook/addon-knobs';
import CenterView from 'storybook/stories/CenterView';
import {action} from '@storybook/addon-actions';
import ProductItem from './index';

storiesOf('MobileStore/components', module)
  .addDecorator(getStories => <CenterView>{getStories()}</CenterView>)
  .add('ProductItem', () => (
    <ProductItem
      _id={text('_id', '_id')}
      description={text('description', 'description')}
      price={number('price', 100)}
      onPress={action('onPress')}
      img="https://i.imgur.com/hEalPMX.png"
      name="React"
    />
  ));

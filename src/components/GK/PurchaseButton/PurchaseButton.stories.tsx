import React from 'react';
import CenterView from 'storybook/stories/CenterView';
import PurchaseButton from 'components/GK/PurchaseButton/index';
import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';

storiesOf('components/GK', module)
  .addDecorator(getStories => <CenterView>{getStories()}</CenterView>)
  .add('PurchaseButton', () => <PurchaseButton onPress={action('onPress')} />);

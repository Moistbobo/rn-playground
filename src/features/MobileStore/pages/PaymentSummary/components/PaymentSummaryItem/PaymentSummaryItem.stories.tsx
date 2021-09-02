import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import PaymentSummaryItem from 'features/MobileStore/pages/PaymentSummary/components/PaymentSummaryItem/index';

storiesOf('MobileStore/components', module)
  .addDecorator(getStories => <CenterView>{getStories()}</CenterView>)
  .add('PaymentSummaryItem', () => (
    <PaymentSummaryItem
      img="https://i.imgur.com/hEalPMX.png"
      name="React"
      quantity={100}
      price={1000}
    />
  ));

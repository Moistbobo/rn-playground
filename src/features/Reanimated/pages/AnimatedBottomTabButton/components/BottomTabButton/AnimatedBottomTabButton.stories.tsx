import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CenterView from 'storybook/stories/CenterView';
import ButtomTabButton from 'features/Reanimated/pages/AnimatedBottomTabButton/components/BottomTabButton/index';
import {action} from '@storybook/addon-actions';
import {dollarSign, plus, shoppingCart} from 'assets/images';

storiesOf('components', module)
  .addDecorator(getStories => (
    <CenterView justifyContent="flex-end" alignContent={undefined}>
      {getStories()}
    </CenterView>
  ))
  .add('AnimatedDrawerButton', () => (
    <ButtomTabButton
      mainButton={{
        image: plus,
        onPress: action('onPress'),
        backgroundColor: 'green',
      }}
      subButtons={[
        {
          image: shoppingCart,
          onPress: action('Sub Press 1'),
          backgroundColor: 'red',
        },
        {
          image: plus,
          onPress: action('Sub Press 2'),
          backgroundColor: 'green',
        },
        {
          image: dollarSign,
          onPress: action('Sub Press 3'),
          backgroundColor: 'blue',
        },
      ]}
    />
  ));

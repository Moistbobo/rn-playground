import React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import GKListSummary from 'components/GK/GKListSummary/index';
import {text} from '@storybook/addon-knobs';

storiesOf('components/GK', module)
  .addDecorator(getStories => (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
      }}
    >
      {getStories()}
    </View>
  ))
  .add('GKListSummary', () => (
    <GKListSummary
      date={new Date().toDateString()}
      line2={text('line2', 'line2')}
    />
  ));

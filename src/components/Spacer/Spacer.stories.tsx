import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View, Text} from 'react-native';
import CenterView from 'storybook/stories/CenterView';
import Spacer from './index';

storiesOf('components/spacer', module)
  .addDecorator(getStories => (
    <CenterView backgroundColor="gray">{getStories()}</CenterView>
  ))
  .add('vertical', () => {
    return (
      <View>
        <Text>Top</Text>
        <Spacer size={32} orientation="vertical" />
        <Text>bottom</Text>
      </View>
    );
  })
  .add('horizontal', () => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text>left</Text>
        <Spacer size={32} orientation="horizontal" />
        <Text>right</Text>
      </View>
    );
  })
  .add('both', () => {
    return (
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text>left</Text>
        <View style={{bottom: 20, alignItems: 'center'}}>
          <Text>top</Text>
          <Spacer size={32} orientation="both" />
          <Text>bottom</Text>
        </View>
        <Text>right</Text>
      </View>
    );
  });

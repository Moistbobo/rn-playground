import React from 'react';
import {storiesOf} from '@storybook/react-native';
import MaterialLikeTextInput from 'components/Reanimated/MaterialLikeTextInput/index';
import {Button, Keyboard, View} from 'react-native';

storiesOf('components', module).add('MaterialLikeTextInput', () => (
  <View style={{flex: 1, padding: 16}}>
    <MaterialLikeTextInput />
    <View style={{height: 16}} />
    <Button title="Hide Keyboard" onPress={Keyboard.dismiss} />
  </View>
));

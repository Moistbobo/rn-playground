import React from 'react';
import {storiesOf} from '@storybook/react-native';
import GKListItem from 'components/GK/GKListItem/index';
import {action} from '@storybook/addon-actions';
import {View} from 'react-native';
import {text} from '@storybook/addon-knobs';

storiesOf('components/GK', module)
  .addDecorator(getStories => (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
      }}
    >
      {getStories()}
    </View>
  ))
  .add('GKListItem', () => (
    <GKListItem
      onPressItem={action('onPressItem')}
      onPressMore={action('onPressMore')}
      label={text('label', 'label')}
      subtitle={text('subtitle', 'subtitle')}
    />
  ));

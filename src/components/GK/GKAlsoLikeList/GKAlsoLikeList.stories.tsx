import React from 'react';

import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import GKAlsoLikeListItem from 'components/GK/GKAlsoLikeList/GKAlsoLikeListItem';
import {action} from '@storybook/addon-actions';
import GKAlsoLikeList from 'components/GK/GKAlsoLikeList/index';
import {text} from '@storybook/addon-knobs';

const dummyData = [
  {
    image: 'https://i.imgur.com/NU7zuAZ.png',
    label: 'AA-12',
  },
  {
    image: 'https://i.imgur.com/pLYOYoS.png',
    label: 'HK-416',
  },
  {
    image: 'https://i.imgur.com/nPGTGXe.png',
    label: 'AK-12',
  },
  {
    image: 'https://i.imgur.com/4LcELwW.png',
    label: 'AK-Alfa',
  },
  {
    image: 'https://i.imgur.com/CZS3enL.png',
    label: 'AN-94',
  },
];

storiesOf('components/GK', module)
  .addDecorator(getStories => (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      {getStories()}
    </View>
  ))
  .add('GKAlsoLikeList', () => (
    <GKAlsoLikeList
      data={dummyData}
      onItemPress={() => action('onItemPress')}
      label={text('label', 'label')}
    />
  ))
  .add('GKAlsoLikeListItem', () => (
    <GKAlsoLikeListItem
      onPress={action('onPress')}
      image={{uri: dummyData[0].image}}
      label={dummyData[0].label}
    />
  ));

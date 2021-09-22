import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import TransparentButton from 'components/TransparentButton';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ReanimatedStackParamList} from 'navigation/RootNavigator/ReanimatedStack';

const routes = ['ReactiveScrollview', 'SpotifyLikePage'];

const ReanimatedLanding = () => {
  const {navigate} =
    useNavigation<
      NativeStackNavigationProp<ReanimatedStackParamList, 'Landing'>
    >();

  const renderItem = ({item}: {item: string}) => (
    <TransparentButton
      label={item}
      onPress={() => navigate(item as keyof ReanimatedStackParamList)}
      color="#4267B2"
    />
  );

  return (
    <FlatList
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={() => <View style={{height: 16}} />}
      data={routes}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'white',
  },
});

export default ReanimatedLanding;

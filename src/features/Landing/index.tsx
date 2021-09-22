import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import TransparentButton from 'components/TransparentButton';
import {useNavigation} from '@react-navigation/native';
import {RootNavigatorParamList} from 'navigation/RootNavigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';

const routes = ['MobileStore', 'Reanimated'];

const Landing = () => {
  const {navigate} =
    useNavigation<DrawerNavigationProp<RootNavigatorParamList, 'Landing'>>();

  const renderItem = ({item}: {item: string}) => (
    <TransparentButton
      label={item}
      onPress={() => navigate(item as keyof RootNavigatorParamList)}
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

export default Landing;

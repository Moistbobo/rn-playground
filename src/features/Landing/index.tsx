import React from 'react';

import {FlatList, StyleSheet} from 'react-native';
import TransparentButton from 'components/TransparentButton';
import {useNavigation} from '@react-navigation/native';

const routes = ['MobileStore'];

const Landing = () => {
  const {navigate} = useNavigation();

  const renderItem = ({item}: {item: string}) => (
    <TransparentButton
      label={item}
      onPress={() => navigate(item)}
      color="#4267B2"
    />
  );

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={routes}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
});

export default Landing;

import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import TransparentButton from 'components/TransparentButton';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const routes = ['MobileStore', 'Reanimated'];

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
    <SafeAreaView style={styles.container} edges={['top']}>
      <FlatList
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        data={routes}
        renderItem={renderItem}
      />
    </SafeAreaView>
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

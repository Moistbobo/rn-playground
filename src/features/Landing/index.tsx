import React from 'react';

import {FlatList, StyleSheet, View} from 'react-native';
import TransparentButton from 'components/TransparentButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootNavigatorParamList} from 'navigation/RootNavigator';

const routes = ['MobileStore', 'Reanimated'];

const Landing = () => {
  const {navigate} =
    useNavigation<NavigationProp<RootNavigatorParamList, 'Landing'>>();

  const renderItem = ({item}: {item: string}) => (
    <TransparentButton
      label={item}
      onPress={() => navigate(item as keyof RootNavigatorParamList)}
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

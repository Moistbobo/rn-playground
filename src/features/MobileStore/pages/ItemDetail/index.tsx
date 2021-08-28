import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectItemById} from 'features/MobileStore/slice/selectors';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MobileStorePages} from 'navigation/RootNavigator/MobileStoreStack';
import {SharedElement} from 'react-navigation-shared-element';
import AppConfig from 'config/AppConfig';
import Design from 'features/MobileStore/config/Design';

export type ItemDetailParams = {
  itemId: string;
  name: string;
};

const ItemDetail = () => {
  const route = useRoute<RouteProp<MobileStorePages, 'ItemDetail'>>();

  const item = useSelector(selectItemById(route.params.itemId));

  if (!item) {
    return <ActivityIndicator color="blue" />;
  }

  return (
    <View style={styles.container}>
      <SharedElement id={item._id}>
        <Image source={{uri: item.img}} style={styles.image} />
      </SharedElement>

      <ScrollView contentContainerStyle={styles.scrollviewContentContainer}>
        <SharedElement id={`${item._id}-name`}>
          <Text style={styles.name}>{item.name}</Text>
        </SharedElement>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Design.colors.white,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Design.colors.reddishBrown,
    alignSelf: 'flex-start',
  },
  scrollviewContentContainer: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: Design.colors.paleOrange,
    padding: 8,
    borderRadius: 16,
  },
});

export default ItemDetail;

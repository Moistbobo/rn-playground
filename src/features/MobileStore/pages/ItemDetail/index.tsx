import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectItemById} from 'features/MobileStore/slice/selectors';
import {RouteProp, useRoute} from '@react-navigation/native';
import {MobileStorePages} from 'navigation/RootNavigator/MobileStoreStack';
import {SharedElement} from 'react-navigation-shared-element';
import Design from 'features/MobileStore/config/Design';
import BackButton from 'components/BackButton';
import AddToCart from 'features/MobileStore/pages/ItemDetail/AddToCart';
import {AppDispatch} from 'store/RootStore';
import {MobileStoreActions} from 'features/MobileStore/slice';
import {showMessage} from 'react-native-flash-message';

export type ItemDetailParams = {
  itemId: string;
  name: string;
};

const ItemDetail = () => {
  const route = useRoute<RouteProp<MobileStorePages, 'ItemDetail'>>();
  const dispatch = useDispatch<AppDispatch>();
  const item = useSelector(selectItemById(route.params.itemId));

  if (!item) {
    return <ActivityIndicator color="blue" />;
  }

  const onPressAddToCart = (quantity: number) => {
    const {_id, name, img} = item;

    dispatch(
      MobileStoreActions.addCart({
        _id,
        quantity,
      }),
    );

    showMessage({
      message: `Added ${quantity} ${name} to cart.`,
      icon: 'success',
      style: {backgroundColor: Design.colors.paleBrown},
      renderFlashMessageIcon: () => (
        <Image source={{uri: img}} style={{width: 50, height: 50}} />
      ),
    });
  };

  return (
    <View style={styles.container}>
      <BackButton tintColor={Design.colors.paleBrown} />
      <SharedElement id={item._id}>
        <Image source={{uri: item.img}} style={styles.image} />
      </SharedElement>

      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={styles.scrollviewContentContainer}
      >
        <SharedElement id={`${item._id}-name`}>
          <Text style={styles.name}>{item.name}</Text>
        </SharedElement>

        <Text>{item.description}</Text>

        <View style={styles.bottomGroup}>
          <AddToCart onPressAdd={onPressAddToCart} />
        </View>
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
  scrollview: {
    borderWidth: 1,
    borderColor: Design.colors.paleOrange,
    borderRadius: 16,
  },
  scrollviewContentContainer: {
    flexGrow: 1,
    padding: 8,
  },
  bottomGroup: {
    marginTop: 32,
  },
});

export default ItemDetail;

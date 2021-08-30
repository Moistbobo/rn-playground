import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectCartWithMetadata} from 'features/MobileStore/slice/selectors';
import {MobileStoreActions} from 'features/MobileStore/slice';
import PaymentSummaryItem from 'features/MobileStore/pages/PaymentSummary/components/PaymentSummaryItem';
import Design from 'features/MobileStore/config/Design';
import TransparentButton from 'components/TransparentButton';
import {useNavigation} from '@react-navigation/native';
import {AppDispatch} from 'store/RootStore';

const PaymentSummary = () => {
  const cartItemsWithMeta = useSelector(selectCartWithMetadata);
  const dispatch = useDispatch<AppDispatch>();
  const {navigate} = useNavigation();

  const [tempItems] = React.useState(cartItemsWithMeta);

  // Immediately empty the cart when navigating to this page as the items
  // have been paid for
  React.useEffect(() => {
    // hacky way to prevent shopping cart list from redirecting
    setTimeout(() => {
      dispatch(MobileStoreActions.emptyCart());
    }, 500);
  }, []);

  const renderItem = ({item}: any) => {
    return <PaymentSummaryItem {...item} />;
  };

  const onPressConfirm = () => {
    navigate('ItemListing');
  };

  const totalPrice = React.useMemo(() => {
    return (
      tempItems
        // @ts-ignore
        .map(item => item.price * item.quantity)
        .reduce((a, c) => a + c) / 100
    );
  }, [tempItems]);

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={<Text style={styles.header}>Order Summary</Text>}
      contentContainerStyle={styles.contentContainerStyle}
      data={tempItems}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.spacer} />}
      ListFooterComponentStyle={styles.footerStyle}
      ListFooterComponent={
        <View>
          <Text style={styles.priceText}>
            Total: <Text style={styles.bold}>${totalPrice}</Text>
          </Text>

          <Text style={styles.thankYouText}>Thank you for your order.</Text>

          <TransparentButton
            label="Back to Item Listing"
            onPress={onPressConfirm}
            color={Design.colors.reddishBrown}
          />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 32,
    color: Design.colors.reddishBrown,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  spacer: {
    height: 16,
  },
  contentContainerStyle: {
    width: '75%',
    alignSelf: 'center',
    flexGrow: 1,
  },
  footerStyle: {
    flex: 1,
    marginTop: 32,
  },
  thankYouText: {
    color: Design.colors.reddishBrown,
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  priceText: {
    color: Design.colors.reddishBrown,
    fontSize: 16,
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default PaymentSummary;

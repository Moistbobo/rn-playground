import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Design from 'features/MobileStore/config/Design';
import * as Animatable from 'react-native-animatable';
import ImageButton from 'components/ImageButton';
import {check, minus, plus, trash} from 'assets/images';

type Props = {
  /**
   * Imag e url
   */
  img: string;

  /**
   * Name of the item.
   */
  name: string;

  /**
   * Quantity of the item.
   */
  quantity: number;

  /**
   * Base price for 1 item.
   */
  price: number;

  /**
   * Adjust cart quantity with new value
   */
  onConfirmEditCart: (_quantity: number) => void;

  /**
   * Remove item from cart
   */
  onDeleteCartItem: () => void;
};

const CartItem = ({
  img,
  name,
  quantity,
  price,
  onConfirmEditCart,
  onDeleteCartItem,
}: Props) => {
  const [editing, setEditing] = React.useState(false);
  const [newQuantity, setNewQuantity] = React.useState(quantity);

  React.useEffect(() => {
    setNewQuantity(quantity);
  }, [quantity]);

  const onConfirmEditQuantity = () => {
    onConfirmEditCart(newQuantity);
    setEditing(false);
  };

  const onDeleteItem = () => {
    onDeleteCartItem();
  };

  const editingOverlay = (
    <Animatable.View
      pointerEvents={!editing ? 'none' : 'auto'}
      style={[styles.overlay, {opacity: editing ? 1 : 0}]}
      transition="opacity"
    >
      <Text style={styles.newQuantity}>{newQuantity}</Text>
      <View style={styles.editQuantityGroup}>
        <ImageButton
          image={plus}
          imageStyle={styles.editButtons}
          tintColor={Design.colors.reddishBrown}
          onPress={() => setNewQuantity(prev => prev + 1)}
        />

        <View style={styles.spacer} />

        <ImageButton
          image={minus}
          imageStyle={styles.editButtons}
          tintColor={Design.colors.reddishBrown}
          onPress={() => setNewQuantity(prev => Math.max(1, prev - 1))}
        />
      </View>

      <ImageButton
        imageStyle={styles.editButtons}
        tintColor={Design.colors.reddishBrown}
        image={check}
        onPress={onConfirmEditQuantity}
      />

      <ImageButton
        image={trash}
        containerStyle={{marginLeft: 32}}
        imageStyle={styles.editButtons}
        tintColor={Design.colors.paleBrown}
        onPress={onDeleteItem}
      />
    </Animatable.View>
  );

  return (
    <TouchableOpacity
      onPress={() => setEditing(true)}
      activeOpacity={1}
      style={styles.cartItem}
    >
      <Text style={styles.quantity}>{quantity}</Text>

      <View style={styles.content}>
        <Image style={styles.image} source={{uri: img}} />

        <Text>{name}</Text>

        <Text>${price * quantity}</Text>
      </View>

      {editingOverlay}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: Design.colors.paleBrown,
  },
  quantity: {
    flex: 0.1,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  overlay: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: -4,
    right: -4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
  },
  editButtons: {
    width: 25,
    height: 25,
  },
  newQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Design.colors.reddishBrown,
  },
  editQuantityGroup: {
    marginHorizontal: 16,
  },
  spacer: {
    height: 16,
  },
});

export default CartItem;

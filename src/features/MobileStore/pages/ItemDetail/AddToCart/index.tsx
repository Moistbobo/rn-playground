import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Design from 'features/MobileStore/config/Design';
import ImageButton from 'components/ImageButton';
import {minus, plus} from 'assets/images';

type Props = {
  /**
   * Callback when the Add to cart button is pressed. Passes the internal quantity state as an argument.
   */
  onPressAdd: (quantity: number) => void;
};

/**
 * Component that has add and minus buttons to select the quantity to add to cart.
 * Minimum 1.
 */
const AddToCart = ({onPressAdd}: Props) => {
  const [count, setCount] = React.useState(1);

  const modCount = (mod: number) => () =>
    setCount(prev => Math.max(1, prev + mod));

  return (
    <>
      <View style={styles.container}>
        <View style={styles.quantityGroup}>
          <ImageButton
            image={minus}
            onPress={modCount(-1)}
            tintColor={Design.colors.reddishBrown}
          />

          <TextInput
            value={count.toString(10)}
            style={styles.textInput}
            keyboardType="number-pad"
          />

          <ImageButton
            image={plus}
            onPress={modCount(1)}
            tintColor={Design.colors.reddishBrown}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => onPressAdd(count)}
      >
        <Text style={styles.buttonText}>ADD TO CART</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInput: {
    paddingHorizontal: 8,
    paddingVertical: 0,
    textAlign: 'center',
    fontSize: 16,
  },
  addToCartButton: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: Design.colors.paleBrown,
    alignSelf: 'center',
  },
  buttonText: {
    color: Design.colors.white,
  },
  quantityGroup: {
    flexDirection: 'row',
    borderColor: Design.colors.paleBrown,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
});

export default AddToCart;
